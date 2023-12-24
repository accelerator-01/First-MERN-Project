import User, { findOne, findById } from "../models/User";
import { sign } from "jsonwebtoken";
import { get } from "config";
import bcrypt from "bcrypt";

export function signup(req, res) {
  const { name, phoneNumber, password } = req.body;

  if (!name || !phoneNumber || !password) {
    res.status(400).json({ msg: "Please enter all fields" });
  }

  findOne({ phoneNumber }).then((user) => {
    if (user) return res.status(400).json({ msg: "User already exists" });

    const newUser = new User({ name, phoneNumber, password });

    // Create salt and hash
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(password, salt, (err, hash) => {
        if (err) throw err;
        newUser.password = hash;
        newUser.save().then((user) => {
          sign(
            { id: user._id },
            get("jwtsecret"),
            { expiresIn: 3600 },
            (err, token) => {
              if (err) throw err;
              res.json({
                token,
                user: {
                  id: user._id,
                  name: user.name,
                  phoneNumber: user.phoneNumber,
                },
              });
            }
          );
        });
      });
    });
  });
}

export async function login(req, res) {
  const { phoneNumber, password } = req.body;
  if (!phoneNumber || !password) {
    res.status(400).json({ msg: "Please enter all fields" });
  }
  findOne({ phoneNumber }).then((user) => {
    if (!user) return res.status(400).json({ msg: "User does not exist" });

    // Validate password
    bcrypt.compare(password, user.password).then((isMatch) => {
      if (!isMatch) return res.status(400).json({ msg: "Invalid credentials" });

      sign(
        { id: user._id },
        get("jwtsecret"),
        { expiresIn: 3600 },
        (err, token) => {
          if (err) throw err;
          res.json({
            token,
            user: {
              id: user._id,
              name: user.name,
              phoneNumber: user.phoneNumber,
            },
          });
        }
      );
    });
  });
}

export function get_user(req, res) {
  findById(req.user.id)
    .select("-password")
    .then((user) => res.json(user));
}

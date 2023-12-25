import { find, create } from "../models/order";
import { findOne, findByIdAndDelete } from "../models/Cart";
import { findOne as _findOne } from "../models/User";
import { get } from "config";

const stripe = require("stripe")(get("StripeAPIKey"));

export async function get_orders(req, res) {
  const userId = req.params.id;
  find({ userId })
    .sort({ date: -1 })
    .then((orders) => res.json(orders));
}

export async function checkout(req, res) {
  try {
    const userId = req.params.id;
    const { source } = req.body;
    let cart = await findOne({ userId });
    let user = await _findOne({ _id: userId });
    const phoneNumber = user.phoneNumber;
    if (cart) {
      const charge = await stripe.charges.create({
        amount: cart.bill,
        currency: "idr",
        source: source,
        receipt_phoneNumber: phoneNumber,
      });
      if (!charge) throw Error("Payment failed");
      if (charge) {
        const order = await create({
          userId,
          items: cart.items,
          bill: cart.bill,
        });
        const data = await findByIdAndDelete({ _id: cart.id });
        return res.status(data).send(order);
      }
    } else {
      res.status(500).send("You do not have items in cart");
    }
  } catch (err) {
    console.log(err);
    res.status(500).send("Something went wrong");
  }
}

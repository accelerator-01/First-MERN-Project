import mongoose from "mongoose";
import { Schema } from "mongoose";

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
});

const User = mongoose.model("User", UserSchema);

export default User;

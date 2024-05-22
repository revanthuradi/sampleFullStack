import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
  firstName: { type: String, required: true },
  secondName: { type: String },
  email: {
    type: String,
    required: true,
    unique: true,

    validator: {
      function(v) {
        return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(v);
      },
      message : (props) => `${props.value} is not valid`
    },
  },
  password: {
    type: String,
    minLength: [6, "The password should contain atleast 6 characters"],
    required: true,
  },
  token : String
});

export const User = mongoose.model("User", userSchema);

import mongoose from "mongoose";

const ContactSchema = new mongoose.Schema({
  email: String,
  name: String,
  message: String,
});

module.exports =
  mongoose.models.Contact || mongoose.model("Contact", ContactSchema);

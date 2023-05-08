import dbConnect from "../../lib/dbConnect";
import Contact from "../../models/contact";
export default async function Contacthandler(req, res) {
  try {
    await dbConnect();
  } catch (e) {
    res.status(422).json({
      message: e.message || "Something went Wrong!!",
      title: "Error",
      status: "error",
    });
  }
  if (req.method === "POST") {
    try {
      const { email, message, name } = req.body;

      if (
        !email ||
        !email.includes("@") ||
        !name ||
        name.trim() === "" ||
        !message ||
        message.trim() === ""
      ) {
        res
          .status(422)
          .json({
            message: "Invalid Data!!",
            title: "404 Not valid Data",
            status: "error",
          });
      }
      const newContact = new Contact({
        ...req.body,
      });
      newContact.save();
      res.status(201).json({
        message: "Successfully sent your contact details ",
        title: "Success",
        status: "success",
      });
    } catch (e) {
      res.status(422).json({
        message: e.message || "Something went Wrong!!",
        title: "Error",
        status: "error",
      });
    }
  } else {
    res.status(200).json("ok");
  }
}

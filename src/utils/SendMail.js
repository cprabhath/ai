import axios from "axios";
import { toast } from "react-toastify";

export const sendMail = async (email, message) => {
  try {
    await axios.post("https://mailsender-jgeh.onrender.com/send-email", {
      from: email,
      message: message,
    });
    toast.success("Thank you for your feedback 😍");
    return;
  } catch (error) {
    toast.error(error.message);
  }
};

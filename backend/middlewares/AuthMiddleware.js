import User from "../model/UserModel.js";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";

dotenv.config();

export const userVerification = (req, res) => {
  const token = req.cookies.token;
  
  // LOG 1: Check if token arrived
  console.log("1. Verification Request Received. Token:", token); 

  if (!token) {
    console.log("2. No token found in cookies. Returning false.");
    return res.json({ status: false });
  }
  
  jwt.verify(token, process.env.TOKEN_KEY, async (err, data) => {
    if (err) {
      // LOG 2: Check if token is valid
      console.error("3. Token verification failed:", err.message); 
      return res.json({ status: false });
    } else {
      const user = await User.findById(data.id);
      if (user) {
        console.log("4. User verified successfully:", user.username);
        return res.json({ status: true, user: user.username });
      } else {
        console.log("5. User ID from token not found in DB.");
        return res.json({ status: false });
      }
    }
  });
};
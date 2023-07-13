import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../config.js";

export const authRequired = (req, res, next) => {
  console.log("validating token...");
  const token = req.cookies.token;
  if (!token)
    return res.status(401).json({ message: "No token, unauthorized" });

  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) {
      console.log(err);
      return res.status(403).json({ message: "Invalid token" });
    }
    req.user = user;
    next();
  });
};

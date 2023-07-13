import User from "../models/user.model.js";
import bcrypt from "bcryptjs";

export const register = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const passwordHash = await bcrypt.hash(password, 10);

  const newUser = new User({
    username,
    email,
      password: passwordHash,
  });

    const userSaved = await newUser.save();
    console.log(`USER REGISTER SUCCESS: New user '${email}'`);
    res.json({
      id: userSaved.id,
      username: userSaved.username,
      email: userSaved.email,
      createdAt: userSaved._createdAt,
    });
  } catch (error) {
    console.log("USER REGISTER ERROR:", error);
    res.status(500).json({ message: error.message });
  }

};

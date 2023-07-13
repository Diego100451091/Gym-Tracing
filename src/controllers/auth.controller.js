import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import { createAccessToken } from "../libs/jwt.js";

/**Function to register a new user */
export const register = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    // Get the hash of the password to not save the original
    const passwordHash = await bcrypt.hash(password, 10);

    // Create the new user and save it
    const newUser = new User({
      username,
      email,
      password: passwordHash,
    });
    const userSaved = await newUser.save();

    // Create the web token
    const token = await createAccessToken({ id: userSaved.id });

    // Send the response to the user
    res.cookie("token", token);
    res.json({
      id: userSaved.id,
      username: userSaved.username,
      email: userSaved.email,
      createdAt: userSaved.createdAt,
      updatedAt: userSaved.updatedAt,
    });
    console.log(`USER REGISTER SUCCESS: New user '${email}'`);
  } catch (error) {
    console.log("USER REGISTER ERROR:", error);
    res.status(500).json({ message: error.message });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const userFound = await User.findOne({email});
    if (!userFound) return res.status(400).json({message: "User not found"});

    const isMatchPassword = await bcrypt.compare(password, userFound.password);

    if(!isMatchPassword) return res.status(400).json({message: "Incorrect password"});

    // Create the web token
    const token = await createAccessToken({ id: userFound.id });

    // Send the response to the user
    res.cookie("token", token);
    res.json({
      id: userFound.id,
      username: userFound.username,
      email: userFound.email,
      createdAt: userFound.createdAt,
      updatedAt: userFound.updatedAt,
    });
    console.log(`USER LOGIN SUCCESS: New user '${email}'`);
  } catch (error) {
    console.log("USER LOGIN ERROR:", error);
    res.status(500).json({ message: error.message });
  }
};

export const logout = async (req, res) => {
  try {
    res.clearCookie("token");
    res.status(200).json({message: "Logged out"});
  } catch (error) {
    console.log("USER LOGOUT ERROR:", error);
    res.status(500).json({ message: error.message });
  }
}

export const profile = async (req, res) => {
  const userFound = await User.findById(req.user.id);

  if (!userFound) return res.status(400).json({message: "User not found"});

  return res.json({
    id: userFound._id,
    username: userFound.username,
    email: userFound.email,
    createdAt: userFound.createdAt,
    updatedAt: userFound.updatedAt,
  })
}
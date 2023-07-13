import User from "../models/user.model.js";

export const register = async (req, res) => {
  const { username, email, password } = req.body;

  console.log(username, email, password);
  const newUser = new User({
    username,
    email,
    password,
  });

  try {
    const userSaved = await newUser.save();
    console.log(`USER REGISTER SUCCESS: New user '${email}'`);
    res.json(userSaved);
  } catch (error) {
    console.log("USER REGISTER ERROR:", error);
  }

};

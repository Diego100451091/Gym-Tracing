import Set from "../models/set.model.js";

export const getSets = async (req, res) => {
  // Get the sets asociated with the user loged
  const sets = await Set.find({ user: req.user.id });
  // Return the sets
  res.json(sets);
};

export const createSet = async (req, res) => {
  const { name, description, exercises } = req.body;

  // Create a new set
  const newSet = new Set({
    user: req.user.id,
    name: name,
    description: description,
    exercises: exercises,
  });
  // Save the set
  const savedSet = await newSet.save();
  // Return the set
  res.json(savedSet);
};

export const getSet = async (req, res) => {
  // Search the set with the user and the param id of the request
  const set = await Set.findOne({ user: req.user.id, _id: req.params.id });
  if (!set) return res.status(404).json({ message: "Set not found" });
  res.json(set);
};

export const deleteSet = async (req, res) => {
  // Search the set with the user and the param id of the request
  const set = await Set.findOne({ user: req.user.id, _id: req.params.id });
  if (!set) return res.status(404).json({ message: "Set not found" });
  // Delete the set
  await Set.findByIdAndDelete(req.params.id);
  res.sendStatus(204);
};

import ExerciseSet from "./models/ExerciseSet.js";

export default (io) => {
  io.on("connection", (socket) => {
    console.log("New user connected. Id: ", socket.id);

    const emitExerciseSets = async () => {
      const exerciseSets = await ExerciseSet.find();
      io.emit("server:loadExerciseSets", exerciseSets);
    };

    emitExerciseSets();

    socket.on("client:saveNewExerciseSet", async (exerciseSet) => {
      const newSet = new ExerciseSet({
        name: exerciseSet.title,
        description: exerciseSet.description,
        exercises: exerciseSet.exercises,
      });
      const savedSet = await newSet.save();
      socket.emit("server:newExerciseSet", savedSet);
    });

    socket.on("client:deleteExerciseSet", async (id) => {
      await ExerciseSet.findByIdAndDelete(id);
      emitExerciseSets();
    });
  });
};

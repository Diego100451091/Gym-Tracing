import ExerciseSet from "./models/ExerciseSet";

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
        exercices: exerciseSet.exercises,
      });
      const savedSet = await newSet.save();
      socket.emit("server:newExerciseSet", savedSet);
      console.log("New exercise set: ", savedSet);
    });
  });
};

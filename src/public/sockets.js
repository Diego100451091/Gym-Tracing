const socket = io();

export const loadExerciseSets = (callback) => {
  socket.on("server:loadExerciseSets", callback);
};

export const saveExerciseSet = (title, description, exercises) => {
  socket.emit("client:saveNewExerciseSet", { title, description, exercises });
};

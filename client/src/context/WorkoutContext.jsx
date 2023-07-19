import { createContext, useContext } from "react";
import { requestCreateWorkout } from "../api/workout.api.js";
import {
  throwSimpleError,
  throwTemporalSuccess,
} from "../alerts/AlertProvider.jsx";

const WorkoutContext = createContext();

export const useWorkoutContext = () => {
  const context = useContext(WorkoutContext);
  if (!context) {
    throw new Error("workoutContext must be used within a WorkoutProvider");
  }
  return context;
};

export const WorkoutProvider = ({ children }) => {
  const saveWorkout = async (name, description, exercises) => {
    const workout = {
      name: name,
      description: description,
      exercises: exercises,
    };
    try {
      const response = await requestCreateWorkout(workout);
      console.log("workout created", response);
      throwTemporalSuccess(`Workout '${name}' created succesfully`);
    } catch (error) {
      console.log("error creating workout", error);
      throwSimpleError(
        "Error creating workout",
        `The workout '${name}' can't be created succesfully`
      );
    }
  };

  return (
    <WorkoutContext.Provider
      value={{
        saveWorkout,
      }}
    >
      {children}
    </WorkoutContext.Provider>
  );
};

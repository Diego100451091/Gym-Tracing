import { createContext, useContext, useState, useEffect } from "react";
import {} from "../api/workout.api.js";
import {
  throwSimpleError,
  throwTemporalSuccess,
} from "../alerts/AlertProvider.jsx";
import { useAuth } from "./AuthContext.jsx";

const NewTrainingContext = createContext();

export const useNewTrainingContext = () => {
  const context = useContext(NewTrainingContext);
  if (!context) {
    throw new Error("NewTrainingContext must be used within a WorkoutProvider");
  }
  return context;
};

export const NewTrainingProvider = ({ children }) => {
  const { isAuthenticated } = useAuth();
  const [currentWorkout, setCurrentWorkout] = useState(null);
  const [exercises, setExercises] = useState([]);

  const inicializeWorkout = (newWorkout, exercisesList) => {
    // Create a dict with the keys of the exerciseList
    if (currentWorkout !== newWorkout) {
      setCurrentWorkout(newWorkout);
      const baseExercisesList = [];
      exercisesList.forEach((exerciseId) => {
        baseExercisesList.push({
          id: exerciseId,
          warmUp: {
            reps: "",
            weight: "",
          },
          sets: [
            {
              reps: "",
              weight: "",
            },
            {
            reps: "",
              weight: "",
            },
            {
            reps: "",
              weight: "",
            },
          ],
        });
      });
      console.log("Inicializing dict:", baseExercisesList)
      setExercises(baseExercisesList);
    }
  };

  const addSetInformation = (exerciseId, reps, weight, isWarmUp, index) => {
    // console.log("Adding set information:", exerciseId, reps, weight, isWarmUp, index)
    const newExercises = exercises.map((exercise) => {
      if (exercise.id === exerciseId) {
        if (isWarmUp) {
          exercise.warmUp = {
            reps: reps,
            weight: weight,
          };
        } else {
          exercise.sets[index] = {
            reps: reps,
            weight: weight,
          };
        }
      }
      return exercise;
    });
    // console.log(newExercises);
    setExercises(newExercises);
  };
    setExercises(newExercises);
  };

  const removeSet = (exerciseId, index) => {
    // console.log("Removing set:", exerciseId, index);
    const newExercises = newExercises.map((exercise) => {
      if (exercise.id === exerciseId) {
          exercise.sets.splice(index, 1);
        }
      return exercise;
    });
    setExercises(newExercises);
  };

  return (
    <NewTrainingContext.Provider
      value={{
        exercises,
        inicializeWorkout,
        addSetInformation,
        removeSet,
      }}
    >
      {children}
    </NewTrainingContext.Provider>
  );
};

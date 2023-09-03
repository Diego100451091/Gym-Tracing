import { createContext, useContext, useState, useEffect } from "react";
import {} from "../api/workout.api.js";
import {
  throwSimpleError,
  throwTemporalSuccess,
} from "../alerts/AlertProvider.jsx";
import { useAuth } from "./AuthContext.jsx";

const WorkoutRecordContext = createContext();

export const useWorkoutRecordContext = () => {
  const context = useContext(WorkoutRecordContext);
  if (!context) {
    throw new Error("WorkoutRecordContext must be used within a WorkoutProvider");
  }
  return context;
};

export const WorkoutRecordProvider = ({ children }) => {
  const { isAuthenticated } = useAuth();
  const [currentWorkout, setCurrentWorkout] = useState(null);
  const [exercises, setExercises] = useState([]);
  const [skippedExercises, setSkippedExercises] = useState({});

  const inicializeWorkout = (newWorkout, exercisesList) => {
    // Create a dict with the keys of the exerciseList
    if (currentWorkout !== newWorkout) {
      setCurrentWorkout(newWorkout);
      const baseExercisesList = [];
      const baseSkippedExercises = {};
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
        baseSkippedExercises[exerciseId] = false;
      });
      console.log("Inicializing dict:", baseExercisesList)
      console.log(baseSkippedExercises);
      setExercises(baseExercisesList);
      setSkippedExercises(baseSkippedExercises);
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

  const addNewSet = (exerciseId) => {
    // console.log("Adding set:", exerciseId);
    const newExercises = exercises.map((exercise) => {
      if (exercise.id === exerciseId) {
        exercise.sets.push({
          reps: "",
          weight: "",
        });
        // console.log("Sets:", exercise.sets);
      }
      return exercise;
    });
    setExercises(newExercises);
  };

  const removeSet = (exerciseId, index) => {
    // console.log("Removing set:", exerciseId, index);
    const newExercises = exercises.map((exercise) => {
      if (exercise.id === exerciseId) {
        exercise.sets.splice(index, 1);
      }
      return exercise;
    });
    setExercises(newExercises);
  };

  const cleanExercise = (exerciseId) => {
    const newExercises = exercises.map((exercise) => {
      if (exercise.id === exerciseId) {
        exercise.warmUp = {
          reps: "",
          weight: "",
        };
        exercise.sets = [
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
        ];
      }
      return exercise;
    });
    setExercises(newExercises);
  }

  const onSkippedExerciseChange = (exerciseId, value) => {
    cleanExercise(exerciseId);
    const newSkippedExercises = {...skippedExercises};
    newSkippedExercises[exerciseId] = value;
    setSkippedExercises(newSkippedExercises);
  }

  return (
    <WorkoutRecordContext.Provider
      value={{
        exercises,
        skippedExercises,
        inicializeWorkout,
        addSetInformation,
        addNewSet,
        removeSet,
        cleanExercise,
        onSkippedExerciseChange,
      }}
    >
      {children}
    </WorkoutRecordContext.Provider>
  );
};

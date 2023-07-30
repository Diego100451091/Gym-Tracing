import { createContext, useContext, useState, useEffect } from "react";
import { requestCreateWorkout, requestWorkouts, requestDeleteWorkout } from "../api/workout.api.js";
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
  const [isLoading, setIsLoading] = useState(true);
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    mountComponent();
  }, []);

  const mountComponent = async () => {
    try {
      const response = await requestWorkouts();
      setWorkouts(response.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const saveWorkout = async (name, description, exercises) => {
    const workout = {
      name: name,
      description: description,
      exercises: exercises,
    };
    try {
      const response = await requestCreateWorkout(workout);
      setWorkouts([...workouts, response.data]);
      throwTemporalSuccess(`Workout '${name}' created succesfully`);
    } catch (error) {
      throwSimpleError(
        "Error creating workout",
        `The workout '${name}' can't be created succesfully`
      );
    }
  };

  const deleteWorkout = async (id) => {
    try {
      await requestDeleteWorkout(id);
      const newWorkouts = workouts.filter((workout) => workout._id !== id);
      setWorkouts(newWorkouts);
      throwTemporalSuccess(`Workout deleted succesfully`);
    } catch (error) {
      throwSimpleError(
        "Error deleting workout",
        `The workout can't be deleted succesfully`
      );
    }
  };
  
  return (
    <WorkoutContext.Provider
      value={{
        saveWorkout,
        deleteWorkout,
        workouts,
        isLoading,
      }}
    >
      {children}
    </WorkoutContext.Provider>
  );
};

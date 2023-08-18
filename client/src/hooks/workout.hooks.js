import { useEffect, useState } from "react";
import { requestWorkout } from "../api/workout.api";
import { useNavigate } from "react-router-dom";
import { throwErrorWithCallback } from "../alerts/AlertProvider";

export const useWorkoutInformation = (workoutId) => {
  const [workout, setWorkout] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const getWorkout = async () => {
      try {
        const workout = await requestWorkout(workoutId);
        setWorkout(workout.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        throwErrorWithCallback(
          "Unable to get workout information",
          () => navigate("/new-training"),
          "Go back"
        );
      }
    };
    if (!workout) getWorkout();
  }, []);

  return {
    workout,
    isLoading,
  };
};

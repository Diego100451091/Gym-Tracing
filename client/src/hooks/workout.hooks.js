import { useEffect, useState, useMemo } from "react";
import { requestWorkout } from "../api/workout.api";
import { useNavigate } from "react-router-dom";
import { throwErrorWithCallback } from "../alerts/AlertProvider";
import { useExerciseInformation } from "./exercise.hooks";
import { useWorkoutRecordContext } from "../context/WorkoutRecordContext";

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

export const useWorkoutRecordExerciseCard = (exerciseId) => {
  const { exercise: exerciseInfo, isLoading: isExerciseInfoLoading } =
    useExerciseInformation(exerciseId);
  const { exercises, skippedExercises } = useWorkoutRecordContext();
  let exerciseRecord = exercises
    ? exercises.find((exercise) => exercise.id == exerciseId)
    : null;
  let isCardLoading = isExerciseInfoLoading || !exerciseInfo;
  const isSkipped = skippedExercises[exerciseId] ?? false;
  const [isExpanded, setIsExpanded] = useState(true);

  const toggleIsExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  const isFullfilled = useMemo(() => {
    if (exerciseRecord) {
      const isWarmUpFullfilled =
        exerciseRecord.warmUp.reps !== "" &&
        exerciseRecord.warmUp.weight !== "";
      const areSetsFullfilled = exerciseRecord.sets.every(
        (set) => set.reps !== "" && set.weight !== ""
      );
      return isWarmUpFullfilled && areSetsFullfilled;
    }
    return false;
  }, [exercises]);

  return {
    exerciseInfo,
    exerciseRecord,
    isCardLoading,
    isFullfilled,
    isSkipped,
    isExpanded,
    toggleIsExpanded,
  };
};

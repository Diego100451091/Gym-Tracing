import { useWorkoutInformation } from "../../hooks/workout.hooks";
import Loading from "../Loading";
import { useEffect } from "react";
import { useWorkoutRecordContext } from "../../context/WorkoutRecordContext";
import WorkoutRecordExerciseCard from "../cards/WorkoutRecordExerciseCard"

const SelectedTrainingPage = ({ workoutId }) => {
  const { workout, isLoading } = useWorkoutInformation(workoutId);
  const { inicializeWorkout } = useWorkoutRecordContext();

  useEffect(() => {
    if (!isLoading) {
      inicializeWorkout(workoutId, workout.exercises);
    }
  }, [isLoading]);

  if (isLoading) return <Loading />;

  return (
    <>
      <h3 className="text-lg font-bold">{workout.name}</h3>
      <p>{workout.description}</p>
      <ul className="flex flex-col gap-3">
        {workout.exercises.map((exercise, index) => {
          return <WorkoutRecordExerciseCard exerciseId={exercise} key={index} />;
        })}
      </ul>
    </>
  );
};

export default SelectedTrainingPage;

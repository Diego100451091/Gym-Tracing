import Loading from "../Loading";
import { useWorkoutContext } from "../../context/WorkoutContext";
import WorkoutCard from "../cards/WorkoutCard";

const WorkoutsList = () => {
  const { workouts, isLoading } = useWorkoutContext();

  if (isLoading) return <Loading />;

  if (workouts.length === 0) return (
    <p>No workouts created yet</p>
  )

  return (
    <ul className="grid grid-cols-1 gap-2 lg:grid-cols-2">
      {workouts.map((workout, index) => (
        <WorkoutCard key={index} workout={workout} />
      ))}
    </ul>
  );
};

export default WorkoutsList;
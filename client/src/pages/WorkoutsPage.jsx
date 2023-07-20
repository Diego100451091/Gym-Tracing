import Header from "../components/Header";
import Loading from "../components/Loading";
import { useWorkoutContext } from "../context/WorkoutContext";
import WorkoutCard from '../components/WorkoutCard';

function WorkoutsPage() {
  const { workouts, isLoading } = useWorkoutContext();

  return (
    <>
      <Header title="Workouts" />
      <main className="mt-12 py-4 px-4 flex flex-col gap-3 bg-white lg:grid lg:px-8">
        <h3 className="text-lg font-bold">Created workouts</h3>
        {isLoading ? (
          <Loading />
        ) : (
          <ul className="grid grid-cols-1 gap-4 lg:grid-cols-2">
            {workouts.map((workout, index) => (
              <WorkoutCard key={index} workout={workout} />
            ))}
          </ul>
        )}
      </main>
    </>
  );
}

export default WorkoutsPage;

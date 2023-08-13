import Header from "../components/sections/Header";
import WorkoutsList from '../components/sections/WorkoutsList';

function WorkoutsPage() {
  return (
    <>
      <Header title="Workouts" />
      <main className="mt-12 py-4 px-6 flex flex-col gap-3 bg-white lg:grid lg:px-8">
        <h3 className="text-lg font-bold">Created workouts</h3>
        <WorkoutsList />
      </main>
    </>
  );
}

export default WorkoutsPage;

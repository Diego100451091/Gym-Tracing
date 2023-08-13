import Header from "../components/sections/Header";
import Loading from "../components/Loading.jsx";
import { ExercisesFilter } from "../components/sections/ExercisesFilter.jsx";
import ExerciseCard from "../components/cards/ExerciseCard.jsx";
import WorkoutForm from "../components/forms/WorkoutForm.jsx";
import { useExerciseContext } from "../context/ExerciseContext.jsx";
import { Pagination } from "../components/Pagination.jsx";

function WorkoutFormPage() {
  const { showedExercises: exercises, isLoading } = useExerciseContext();

  return (
    <>
      <Header title={"Workout creator"} />
      <div className="mt-12 py-4 flex flex-col gap-3 bg-white px-6 lg:grid lg:grid-cols-workoutPage lg:gap-x-5">
        <aside className="lg:fixed lg:w-[265px] border-b-2 pb-4 lg:border-b-0 lg:pb-0">
          <WorkoutForm />
        </aside>

        <main className="flex flex-col gap-3 lg:col-span-1 lg:col-start-2 lg:border-l-2 lg:pl-5">
          <h3 className="font-bold text-lg">Exercise selector</h3>
          {isLoading ? (
            <Loading />
          ) : (
            <>
              <ExercisesFilter />
              <Pagination />
              <ul id="exercises-list" className="grid grid-cols-12 gap-2">
                {exercises.map((exercise) => (
                  <ExerciseCard key={exercise.id} exerciseInfo={exercise} />
                ))}
              </ul>
              <Pagination />
            </>
          )}
        </main>
      </div>
    </>
  );
}

export default WorkoutFormPage;

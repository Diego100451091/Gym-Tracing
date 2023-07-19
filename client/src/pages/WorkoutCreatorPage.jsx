import Header from "../components/Header.jsx";
import Loading from "../components/Loading.jsx";
import { ExercisesFilter } from "../components/ExercisesFilter.jsx";
import ExerciseCard from "../components/ExerciseCard.jsx";
import WorkoutForm from "../components/WorkoutForm.jsx";
import { useExerciseContext } from "../context/ExerciseContext.jsx";


function WorkoutFormPage() {
  const { filteredExercises: exercises, isLoading } = useExerciseContext();

  return (
    <>
      <Header title={"Workout creator"} />
      <div className="mt-12 py-4 flex flex-col gap-3 bg-white px-8 lg:grid lg:grid-cols-workoutPage lg:gap-x-5">
        <aside className="lg:fixed lg:w-[265px] border-b-2 pb-4 lg:border-b-0 lg:pb-0">
          <WorkoutForm />
        </aside>

        <main className="flex flex-col gap-2 lg:col-span-1 lg:col-start-2 lg:border-l-2 lg:pl-5">
          <h3 className="font-bold text-lg">Exercise selector</h3>
          {isLoading ? (
            <Loading />
          ) : (
            <>
              <ExercisesFilter />
              <ul id="exercises-list" className="grid grid-cols-12 gap-2">
                {exercises.map((exercise) => (
                  <ExerciseCard key={exercise.id} exerciseInfo={exercise} />
                ))}
              </ul>
            </>
          )}
        </main>
      </div>
    </>
  );
}

export default WorkoutFormPage;

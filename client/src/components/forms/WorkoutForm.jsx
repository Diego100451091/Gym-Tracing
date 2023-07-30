import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { workoutSchema } from "../../schemas/workout.schema.js";
import FormInput from "./FormInput.jsx";
import { useExerciseContext } from "../../context/ExerciseContext.jsx";
import { useWorkoutContext } from "../../context/WorkoutContext.jsx";
import ActionButton from "../ActionButton.jsx";

const WorkoutForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(workoutSchema) });
  const { selectedExercises } = useExerciseContext();
  const { saveWorkout } = useWorkoutContext();

  const onSubmit = (data) => {
    const exercises = Object.values(selectedExercises).map(
      (exercise) => exercise.id
    );
    console.log("Saving: ", data.name, data.description, exercises);
    saveWorkout(data.name, data.description, exercises);
  };

  return (
    <form
      action=""
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-wrap gap-3"
    >
      <h3 className="font-bold text-lg">Form information</h3>
      <FormInput
        id="name"
        label="Workout name"
        type="text"
        size="w-full"
        registerHandler={register}
        placeholder="Push workout"
        errors={errors.name}
      />

      <FormInput
        id="description"
        label="Workout description"
        isTextArea={true}
        size="w-full "
        registerHandler={register}
        placeholder="Workout routine for ..."
        errors={errors.description}
      />
      <SelectedExercisesList />
      <div className="w-full flex items-center justify-center self-end">
        <ActionButton size="medium" customClass="w-max px-8">
          CREATE WORKOUT
        </ActionButton>
      </div>
    </form>
  );
};

const SelectedExercisesList = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { selectedExercises, toggleExerciseChecked } = useExerciseContext();

  const toggleIsOpen = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="w-full flex flex-col p-2 gap-2 border-2 rounded-md border-gray-300 shadow-sm">
      <header
        className="flex justify-between cursor-pointer"
        onClick={() => toggleIsOpen()}
      >
        <h4 className="text-sm">Selected exercises</h4>
        <span className="text-xs text-gray-400">
          {isOpen ? (
            <i className="fas fa-chevron-up" />
          ) : (
            <i className="fas fa-chevron-down" />
          )}
        </span>
      </header>
      {isOpen ? (
        <ul className="border-t-2 p-2 pb-0 flex flex-col gap-2 overflow-scroll max-h-[45vh]">
          {Object.values(selectedExercises).length > 0 ? (
            Object.values(selectedExercises).map((exercise, index) => (
              <li
                key={exercise.id}
                className="w-full flex justify-between gap-3"
              >
                <span className="text-sm">{index + 1}.</span>
                <span className="text-sm text-center">
                  {exercise.name[0].toUpperCase() + exercise.name.slice(1)}
                </span>
                <button
                  className="cursor-pointer"
                  onClick={() => toggleExerciseChecked(exercise.id)}
                >
                  <i className="fas fa-times text-gray-400" />
                </button>
              </li>
            ))
          ) : (
            <li className="w-full">
              <span className="text-sm">No exercises selected</span>
            </li>
          )}
        </ul>
      ) : null}
    </div>
  );
};

export default WorkoutForm;

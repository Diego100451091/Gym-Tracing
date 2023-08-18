import { useWorkoutInformation } from "../../hooks/workout.hooks";
import { useExerciseInformation } from "../../hooks/exercise.hooks";
import Loading from "../Loading";
import { useEffect, useState } from "react";
import { useNewTrainingContext } from '../../context/NewTrainingContext';

const SelectedTrainingPage = ({ workoutId }) => {
  const { workout, isLoading } = useWorkoutInformation(workoutId);
  const { inicializeWorkout } = useNewTrainingContext();

  useEffect(() => {
    if (!isLoading) {
      inicializeWorkout(workoutId, workout.exercises);
    }
  }, [isLoading])

  if (isLoading) return <Loading />;

  return (
    <>
      <h3 className="text-lg font-bold">{workout.name}</h3>
      <p>{workout.description}</p>
      <ul className="flex flex-col gap-3">
        {workout.exercises.map((exercise, index) => {
          return <TrainingExerciseCard exerciseId={exercise} key={index} />;
        })}
      </ul>
    </>
  );
};

const TrainingExerciseCard = ({ exerciseId }) => {
  const { exercise, isLoading } = useExerciseInformation(exerciseId);
  const [setsList, setSetsList] = useState([
    <TrainingExerciseCardInput isWarmUp={false} index={1} key={1} />,
    <TrainingExerciseCardInput isWarmUp={false} index={2} key={2} />,
    <TrainingExerciseCardInput isWarmUp={false} index={3} key={3} />,
  ]);

  const addNewSet = () => {
    const newIndex = setsList.length + 1;

    setSetsList([
      ...setsList,
      <TrainingExerciseCardInput
        isWarmUp={false}
        index={newIndex}
        key={newIndex}
      />,
    ]);
  };

  const deleteLastSet = () => {
    const newList = [...setsList];
    newList.pop();
    setSetsList(newList);
  };

  return (
    <li className="flex flex-col gap-3 p-4 border-2 border-gray-300 rounded-md shadow-sm">
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <p>{exercise.name[0].toUpperCase() + exercise.name.slice(1)}</p>
          <ul className="w-full flex flex-wrap justify-between gap-3">
            <TrainingExerciseCardInput isWarmUp={true} />
            {setsList &&
              setsList.map((set) => {
                return set;
              })}
            {setsList.length < 6 && (
              <li className="flex justify-center items-center h-[4.5rem] w-[10rem] max-w-[16rem] flex-shrink flex-grow flex-col gap-1 border border-gray-200 rounded-md p-2 border-dashed  hover:bg-gradient-to-t from-[#ffcea196] to-white">
                <button
                  className="w-full h-full flex gap-2 justify-center items-center"
                  onClick={addNewSet}
                >
                  <i className="fas fa-solid fa-plus-circle"></i>
                  Add set
                </button>
              </li>
            )}
          </ul>
          {setsList.length > 2 && (
            <button onClick={deleteLastSet}>Delete last set</button>
          )}
        </>
      )}
    </li>
  );
};

const useTrainingCardInput = () => {
  const [value, setValue] = useState("");

  const onChange = (event) => {
    const value = event.target.value;

    if (value === "" || !isNaN(+value)) {
      setValue(value);
    }
  };

  return {
    value,
    onChange,
  };
};

const TrainingExerciseCardInput = ({ isWarmUp, index }) => {
  const { value: weight, onChange: onWeightChange } = useTrainingCardInput();
  const { value: reps, onChange: onRepsChange } = useTrainingCardInput();

  return (
    <li className="flex h-[4.5rem] w-[10rem] max-w-[16rem] flex-shrink flex-grow flex-col justify-between gap-1 border border-gray-200 rounded-md p-2 border-dashed hover:bg-gradient-to-t from-[#ffcea196] to-white">
      <span className="text-sm">{isWarmUp ? "Warm up:" : `Set ${index}:`}</span>
      <div className="flex rounded-md border border-gray-200">
        <input
          type="text"
          min=""
          value={weight}
          className="w-full text-sm text-center p-1 rounded-l-md border-r border-gray-200 focus:outline-none"
          onChange={onWeightChange}
          placeholder="Weight"
        ></input>
        <input
          type="text"
          min=""
          value={reps}
          className="w-full text-sm text-center p-1 rounded-r-md focus:outline-none"
          onChange={onRepsChange}
          placeholder="Reps"
        ></input>
      </div>
    </li>
  );
};

export default SelectedTrainingPage;

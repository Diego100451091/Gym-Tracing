import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { requestExercise } from "../../api/exercise.api";
import { useWorkoutContext } from '../../context/WorkoutContext';
import ActionButton from "../ActionButton";
import { throwCustomImage } from '../../alerts/AlertProvider';

const WorkoutCard = ({ workout }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { deleteWorkout } = useWorkoutContext();
  const navigate = useNavigate();


  const toggleIsExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <li
      key={workout._id}
      className="flex flex-wrap justify-between items-center gap-2 p-3 rounded-lg border-2 border-slate-300 shadow-sm"
    >
      <div className="flex justify-between items-center gap-3 w-full">
        <h2 className="text-lg leading-6 font-bold h-min">{workout.name}</h2>
        <div className="flex justify-center items-center gap-3">
          <ActionButton size="small" customClass="w-full" onClick={() => deleteWorkout(workout._id)}>
            DELETE
          </ActionButton>
          <ActionButton size="small" customClass="w-full" onClick={() => navigate(`/new-training/${workout._id}`)}>
            START
          </ActionButton>
        </div>
      </div>
      <p className="text-sm text-justify">
        <label className="text-sm font-semibold">Description: </label>
        {workout.description}
      </p>
      <ul
        className={
          "w-full flex flex-col overflow-hidden sm:col-span-full " +
          (!isExpanded ? "hidden" : "")
        }
      >
        <li className="text-sm font-semibold">Exercises:</li>
        {workout.exercises.map((exerciseId, index) => (
          <WorkoutCardExercise
            key={index}
            exerciseId={exerciseId}
            index={index + 1}
          />
        ))}
      </ul>
      <button
        onClick={toggleIsExpanded}
        className="w-full cursor-pointer flex justify-center items-center gap-1 text-xs text-slate-400"
      >
        {isExpanded ? "Hide exercises" : "Show exercises"}
        {isExpanded ? (
          <i className="fas fa-chevron-up text-sm" />
        ) : (
          <i className="fas fa-chevron-down text-sm" />
        )}
      </button>
    </li>
  );
};

const WorkoutCardExercise = ({ exerciseId, index }) => {
  const [exerciseData, setExerciseData] = useState({});
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    getExerciseData();
  }, []);

  const getExerciseData = async () => {
    try {
      const response = await requestExercise(exerciseId);
      setExerciseData(response.data);
      setIsReady(true);
    } catch (err) {
      console.log(err);
    }
  };

  if (!isReady) return;

  return (
    <li className="w-full flex justify-between items-center p-1 border-t border-slate-300 ">
      <label className="text-sm">{index}</label>
      <label className="text-sm">
        {exerciseData?.name[0].toUpperCase() + exerciseData?.name.slice(1)}
      </label>
      <button onClick={() => throwCustomImage(exerciseData?.name[0].toUpperCase() + exerciseData?.name.slice(1), (
        `<ul className="flex flex-col justify-between items-start">
          <li><b>Body part: </b>${exerciseData.bodyPart}</li>
          <li><b>Target muscle: </b>${exerciseData.target}</li>
          <li><b>Equipment required: </b>${exerciseData.equipment}</li>
        </ul>`          
      ), exerciseData.gifUrl, exerciseData.name)}>
        <i className="fas fa-info-circle text-sm text-primary-light"></i>
      </button>
    </li>
  );
};

export default WorkoutCard;

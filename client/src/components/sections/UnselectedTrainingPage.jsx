import { useWorkoutContext } from "../../context/WorkoutContext";
import ActionButton from "../ActionButton";
import { useNavigate } from "react-router-dom";

const UnselectedTrainingPage = () => {
  const { isLoading, workouts } = useWorkoutContext();
  const navigate = useNavigate();

  return (
    <>
      <h3 className="text-lg font-bold">Workout selector</h3>
      <p> Please, select one workout:</p>
      {!isLoading ? (
        <ul className="w-full flex flex-wrap justify-between items-center gap-3">
          {workouts.map((workout) => (
            <li
              key={workout._id}
              className="flex-grow flex flex-col items-center xs:grid grid-cols-6 place-items-center gap-2 rounded-md shadow-sm p-2 border border-spacing-0 border-gray-300"
            >
              <span className="w-full flex items-center col-span-4 text-sm md:text-base overflow-hidden">
                {workout?.name}
              </span>
              <ActionButton
                onClick={() => navigate(`/workout-record/${workout._id}`)}
                size="small"
                customClass={"col-span-2 xs:place-self-end"}
              >
                Start
              </ActionButton>
            </li>
          ))}
        </ul>
      ) : null}
    </>
  );
};

export default UnselectedTrainingPage;

import { useWorkoutRecordExerciseCard } from "../../hooks/workout.hooks";
import { useWorkoutRecordContext } from "../../context/WorkoutRecordContext";
import Loading from "../Loading";

const WorkoutRecordExerciseCard = ({ exerciseId }) => {
  const MAXSETS = 6;
  const {
    exerciseInfo,
    exerciseRecord,
    isCardLoading,
    isFullfilled,
    isSkipped,
    isExpanded,
    toggleIsExpanded,
  } = useWorkoutRecordExerciseCard(exerciseId);
  const { addNewSet, cleanExercise, onSkippedExerciseChange } =
    useWorkoutRecordContext();

  if (isCardLoading)
    return (
      <li className="flex flex-col gap-3 p-4 border-2 border-gray-400 rounded-md shadow-sm">
        <Loading />
      </li>
    );

  return (
    <li
      className={`flex flex-col p-4 border-2 border-gray-400 rounded-md shadow-sm ${
        isFullfilled ? "border-primary-light bg-opacity-40 bg-[#fcddc093]" : ""
      } ${isSkipped ? " bg-gray-100" : ""}`}
    >
      <header className="w-full flex flex-col 2xs:flex-row justify-between items-center gap-2 border-b border-gray-300 p-1 pt-0">
        <h3>
          {exerciseInfo.name[0].toUpperCase() + exerciseInfo.name.slice(1)}
        </h3>
        <section className="flex flex-wrap gap-3 items-center justify-center">
          <div className="flex items-center gap-1">
            <label className={"text-sm"} htmlFor={exerciseId + "-skip-button"}>
              Skip
            </label>
            <input
              id={exerciseId + "-skip-button"}
              type="checkbox"
              className={
                "slider-checkbox filter grayscale-0 text-white !outline-gray-400 before:bg-gray-400 checked:bg-orange-300  checked:before:bg-primary-light checked:!outline-primary-light"
              }
              value={isSkipped}
              onChange={(event) =>
                onSkippedExerciseChange(exerciseId, event.target.checked)
              }
            ></input>
          </div>
          <button onClick={() => cleanExercise(exerciseId)} title="Restore">
            <i className="fas fa-solid fa-trash-can-arrow-up text-gray-400 hover:text-primary-light"></i>
          </button>
          <button onClick={toggleIsExpanded} title="Expand">
            <i
              className={`fas text-sm text-gray-400 ${
                isExpanded ? "fa-chevron-up" : "fa-chevron-down"
              }`}
            />
          </button>
        </section>
      </header>
      <section
        className={`grid transition-all duration-300 ${
          isExpanded
            ? "mt-3 opacity-1 grid-rows-[1fr]"
            : "opacity-0 grid-rows-[0fr]"
        }`}
      >
        <article
          className={`w-full flex flex-col xs:flex-row items-center gap-2 overflow-hidden ${
            isSkipped ? "grayscale" : ""
          }`}
        >
          <img
            className="h-min 2xs:max-w-[50%] xs:max-w-full xs:w-24"
            src={exerciseInfo.gifUrl}
            alt={exerciseInfo.name}
          ></img>
          <ul className="w-full grid grid-cols-[repeat(auto-fit,_minmax(150px,_1fr))] gap-2">
            <WorkoutRecordExerciseCardSet
              isWarmUp={true}
              exerciseId={exerciseId}
              weightProp={exerciseRecord.warmUp.weight ?? ""}
              repsProp={exerciseRecord.warmUp.reps ?? ""}
              disabled={isSkipped}
            />
            {exerciseRecord.sets.map((exerciseSet, index) => (
              <WorkoutRecordExerciseCardSet
                isWarmUp={false}
                exerciseId={exerciseId}
                key={index}
                index={index}
                isLastIndex={
                  index === exerciseRecord.sets.length - 1 && index >= 2
                }
                weightProp={exerciseSet.weight}
                repsProp={exerciseSet.reps}
                disabled={isSkipped}
              />
            ))}
            {exerciseRecord.sets.length < MAXSETS && (
              <li className="flex justify-center items-center h-[4.5rem] w-full flex-shrink flex-grow flex-col gap-1 border border-gray-300 rounded-md p-2 border-dashed  hover:bg-gradient-to-t from-[#ffcea196] to-white">
                <button
                  className={`w-full h-full flex gap-2 justify-center items-center text-gray-400 ${
                    isSkipped ? "cursor-default" : "cursor-pointer"
                  }`}
                  onClick={() => !isSkipped && addNewSet(exerciseId)}
                >
                  <i className="fas fa-solid fa-plus-circle"></i>
                  Add set
                </button>
              </li>
            )}
          </ul>
        </article>
      </section>
    </li>
  );
};

const WorkoutRecordExerciseCardSet = ({
  isWarmUp,
  index,
  isLastIndex,
  exerciseId,
  weightProp,
  repsProp,
  disabled,
}) => {
  const { removeSet, addSetInformation } = useWorkoutRecordContext();

  return (
    <li className="flex h-[4.5rem] w-full flex-shrink flex-grow flex-col justify-between gap-1 border border-gray-300 rounded-md p-2 border-dashed hover:bg-gradient-to-t from-[#ffcea196] to-white">
      <span className="text-sm flex justify-between">
        {isWarmUp ? "Warm up:" : `Set ${index + 1}:`}
        {isLastIndex ? (
          <button onClick={() => !disabled && removeSet(exerciseId, index)}>
            <i
              className={`fas fa-solid fa-close text-gray-400 ${
                disabled
                  ? "cursor-default"
                  : "cursor-pointer hover:text-primary-light"
              }`}
            ></i>
          </button>
        ) : null}
      </span>
      <div className="flex rounded-md border border-gray-300 bg-white">
        <WorkoutRecordExerciseCardSetInput
          value={weightProp}
          type={"Weight"}
          onChange={(value) =>
            addSetInformation(exerciseId, repsProp, value, isWarmUp, index)
          }
          disabled={disabled}
        />
        <WorkoutRecordExerciseCardSetInput
          value={repsProp}
          type={"Reps"}
          onChange={(value) =>
            addSetInformation(exerciseId, value, weightProp, isWarmUp, index)
          }
          disabled={disabled}
        />
      </div>
    </li>
  );
};

const WorkoutRecordExerciseCardSetInput = ({
  value,
  type,
  onChange: onChangeCallback,
  disabled,
}) => {
  const validateValue = (value) => {
    if (value === "" || !isNaN(+value)) return true;
    return false;
  };

  const onChange = (event) => {
    const inputValue = event.target.value;
    if (validateValue(inputValue)) {
      onChangeCallback(inputValue);
    }
  };

  return (
    <input
      type="text"
      min=""
      value={value}
      className="w-full text-sm text-center p-1 rounded-md focus:outline-none first:rounded-r-none first:border-r first:border-gray-300 last:rounded-l-none"
      onChange={onChange}
      placeholder={type}
      disabled={disabled}
    ></input>
  );
};

export default WorkoutRecordExerciseCard;

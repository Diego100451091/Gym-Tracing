import { useExerciseContext } from '../../context/ExerciseContext';

const ExerciseCard = ({ exerciseInfo }) => {
  const { id, name, bodyPart, equipment, target, gifUrl } = exerciseInfo;
  const {
    isExerciseSelected: isSelected,
    toggleExerciseChecked: toggleCheck,
  } = useExerciseContext();

  return (
    <li
      className={
        "cursor-pointer w-full p-2 border-[2px] border-gray-300 rounded-xl flex flex-col md:flex-row justify-between items-center gap-4 col-span-12 xs:col-span-6 lt md:col-span-6 lg:col-span-12 xl:col-span-6 " +
        (isSelected(id) ? "border-primary-light bg-gradient-to-t from-[#ffe4cd7d] to-white" : "")
      }
      onClick={() => toggleCheck(id, name)}
    >
      <img
        className="h-36 aspect-square md:h-24 object-cover rounded-lg"
        src={`${gifUrl}`}
        alt={name}
      />
      <div className="w-full md:h-full flex flex-col gap-1">
        <p className="font-bold text-base">{name[0].toUpperCase() + name.substring(1)}</p>
        <p className="text-sm">
          - Body part: {bodyPart[0].toUpperCase() + bodyPart.substring(1)}
        </p>
        <p className="text-sm">
          - Target muscle: {target[0].toUpperCase() + target.substring(1)}
        </p>
        <p className="text-sm">
          - Equipment: {equipment[0].toUpperCase() + equipment.substring(1)}
        </p>
      </div>
      <input
        type="checkbox"
        className="slider-checkbox md:rotate-90 md:before:-rotate-90 md:h-4 text-white !outline-gray-400 before:bg-gray-400 checked:bg-orange-300  checked:before:bg-primary-light checked:!outline-primary-light"
        checked={isSelected(id)}
        onChange={() => toggleCheck(id, name)}
        data-id={id}
      />
    </li>
  );
};

export default ExerciseCard;

import { useState } from "react";
import { useExerciseContext } from "../context/ExerciseContext.jsx";

export const ExercisesFilter = () => {
  const [isOpen, setIsOpen] = useState(false);
  const {
    filterCategoriesHandler,
    resetFilter,
  } = useExerciseContext();


  const toggleIsOpen = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <section className="col-span-full flex flex-col p-2 gap-2 border-2 rounded-md border-gray-300 shadow-sm">
      <header className="flex justify-between cursor-pointer" onClick={() => toggleIsOpen()}>
        <h4>Filters</h4>
        <span className="text-xs text-gray-400">
          {isOpen ? (
            <i className="fas fa-chevron-up" />
          ) : (
            <i className="fas fa-chevron-down" />
          )}
        </span>
      </header>
      {isOpen ? (
        <main className="overflow-hidden border-t-2 p-2 flex flex-col gap-y-3 sm:grid sm:grid-cols-3 sm:gap-x-10">
          <FilterInput
            label="Body part"
            list={filterCategoriesHandler.bodyPart.list}
            onHandleChange={filterCategoriesHandler.bodyPart.setSelectedValue}
            value={filterCategoriesHandler.bodyPart.value}
          />
          <FilterInput
            label="Target muscle"
            list={filterCategoriesHandler.targetMuscle.list}
            onHandleChange={
              filterCategoriesHandler.targetMuscle.setSelectedValue
            }
            value={filterCategoriesHandler.targetMuscle.value}
          />
          <FilterInput
            label="Equipment required"
            list={filterCategoriesHandler.equipment.list}
            onHandleChange={filterCategoriesHandler.equipment.setSelectedValue}
            value={filterCategoriesHandler.equipment.value}
          />
          <button
            className="small-button bg-primary-light text-white col-start-3"
            onClick={() => resetFilter()}
          >
            Reset filters
          </button>
        </main>
      ) : null}
    </section>
  );
};

const FilterInput = ({ label, list, value, onHandleChange }) => {
  return (
  <div className="w-50 flex flex-col gap-1">
    <label className="text-sm">{label}</label>
    <select
      onChange={(e) => onHandleChange(e.target.value)}
      className={
        "w-full rounded-lg border-2 border-gray-400 text-sm " +
        (value !== "All" ? "border-primary-light" : "")
      }
      value={value}
    >
      <option value={"All"}>All</option>
      {list.map((category) => (
        <option key={category} value={category}>
          {category[0].toUpperCase() + category.slice(1)}
        </option>
      ))}
    </select>
  </div>
);
};

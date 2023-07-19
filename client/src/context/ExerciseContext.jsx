import { createContext, useState, useContext, useEffect, useMemo } from "react";
import { requestExercises, makeApiRequest } from "../api/exercise.api.js";
import { useExerciseFilter } from "../hooks/exercise.hooks.js";

export const ExerciseContext = createContext();

export const useExerciseContext = () => {
  const context = useContext(ExerciseContext);
  if (!context) {
    throw new Error("exerciseContext must be used within an ExerciseProvider");
  }
  return context;
};

export const ExerciseProvider = ({ children }) => {
  const [exercises, setExercises] = useState([]);
  const [selectedExercises, setSelectedExercises] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { filterCategoriesHandler, filterValue, resetFilter, checkFilter } =
    useExerciseFilter();

  const filteredExercises = useMemo(() => {
    return exercises.filter((exercise) => checkFilter(exercise));
  }, [exercises, filterValue]);

  useEffect(() => {
    mountComponent();
  }, []);

  const mountComponent = async () => {
    const exercises = await makeApiRequest(requestExercises);
    if (exercises) {
      setExercises(exercises.splice(0, 100));
      setIsLoading(false);
    }
  };

  const toggleExerciseChecked = (id, name) => {
    if (selectedExercises[id]) {
      const newSelectedExercises = { ...selectedExercises };
      delete newSelectedExercises[id];
      return setSelectedExercises(newSelectedExercises);
    }
    return setSelectedExercises({
      ...selectedExercises,
      [id]: { id, name },
    });
  };

  const isExerciseSelected = (id) => {
    return selectedExercises[id] ? true : false;
  };

  return (
    <ExerciseContext.Provider
      value={{
        filteredExercises,
        toggleExerciseChecked,
        isExerciseSelected,
        resetFilter,
        isLoading,
        filterCategoriesHandler,
        selectedExercises,
      }}
    >
      {children}
    </ExerciseContext.Provider>
  );
};

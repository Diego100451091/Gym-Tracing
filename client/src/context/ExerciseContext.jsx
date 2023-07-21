import { createContext, useState, useContext, useEffect, useMemo } from "react";
import { requestExercises, makeApiRequest } from "../api/exercise.api.js";
import {
  useExerciseFilter,
  useListPagination,
} from "../hooks/exercise.hooks.js";

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
  const { currentPage, changeMaximumPage, nextPage, previousPage, changePage, showedPages} =
    useListPagination();

  const filteredExercises = useMemo(() => {
    const newFilteredExercises = exercises.filter((exercise) => checkFilter(exercise))
    changeMaximumPage(newFilteredExercises.length);
    return newFilteredExercises;
  }, [exercises, filterValue]);

  const showedExercises = useMemo(() => {
    return filteredExercises.slice((currentPage-1)*50, currentPage*50);
  }, [filteredExercises, currentPage])

  useEffect(() => {
    mountComponent();
  }, []);

  const mountComponent = async () => {
    const exercises = await makeApiRequest(requestExercises);
    if (exercises) {
      changeMaximumPage(exercises.length)
      setExercises(exercises);
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
        showedExercises,
        toggleExerciseChecked,
        isExerciseSelected,
        resetFilter,
        isLoading,
        filterCategoriesHandler,
        selectedExercises,
        currentPage, 
        changeMaximumPage, 
        nextPage, 
        previousPage, 
        changePage,
        showedPages
      }}
    >
      {children}
    </ExerciseContext.Provider>
  );
};

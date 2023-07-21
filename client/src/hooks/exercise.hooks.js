import { useState, useEffect, useMemo, useRef } from "react";
import {
  requestBodyPartList,
  requestEquipementList,
  requestTargetMuscleList,
  makeApiRequest,
} from "../api/exercise.api.js";

const useFilterCategory = (requestValueList) => {
  const valueList = useRef([]);
  const [selectedValue, setSelectedValue] = useState("All");

  useEffect(() => {
    inicializeHook();
  }, []);

  const inicializeHook = async () => {
    try {
      const response = await makeApiRequest(requestValueList);
      valueList.current = response;
    } catch (err) {
      console.log(err);
      valueList.current = [];
    }
  };

  const isSelected = (value) => {
    if (selectedValue === "All") {
      return true;
    }
    return selectedValue.toLowerCase() === value.toLowerCase();
  };

  return {
    valueList: valueList.current,
    selectedValue,
    setSelectedValue,
    isSelected,
  };
};

export const useExerciseFilter = () => {
  const {
    valueList: bodyPartList,
    selectedValue: selectedBodyPart,
    setSelectedValue: setSelectedBodyPart,
    isSelected: isBodyPartSelected,
  } = useFilterCategory(requestBodyPartList);
  const {
    valueList: targetMuscleList,
    selectedValue: selectedTargetMuscle,
    setSelectedValue: setSelectedTargetMuscle,
    isSelected: isTargetMuscleSelected,
  } = useFilterCategory(requestTargetMuscleList);
  const {
    valueList: equipmentList,
    selectedValue: selectedEquipment,
    setSelectedValue: setSelectedEquipment,
    isSelected: isEquipmentSelected,
  } = useFilterCategory(requestEquipementList);

  const filterCategoriesHandler = {
    bodyPart: {
      list: bodyPartList,
      setSelectedValue: setSelectedBodyPart,
      value: selectedBodyPart,
    },
    targetMuscle: {
      list: targetMuscleList,
      setSelectedValue: setSelectedTargetMuscle,
      value: selectedTargetMuscle,
    },
    equipment: {
      list: equipmentList,
      setSelectedValue: setSelectedEquipment,
      value: selectedEquipment,
    },
  };

  const checkFilter = (exercise) => {
    return (
      isBodyPartSelected(exercise.bodyPart) &&
      isTargetMuscleSelected(exercise.target) &&
      isEquipmentSelected(exercise.equipment)
    );
  };

  const resetFilter = () => {
    setSelectedBodyPart("All");
    setSelectedTargetMuscle("All");
    setSelectedEquipment("All");
  };

  const filterValue = useMemo(() => {
    return `${selectedBodyPart}/${selectedEquipment}/${selectedTargetMuscle}`;
  }, [selectedBodyPart, selectedEquipment, selectedTargetMuscle]);

  return {
    filterCategoriesHandler,
    filterValue,
    checkFilter,
    resetFilter,
  };
};

export const useListPagination = () => {
  const itemsEachPage = 50;
  const [maxPages, setMaxPages] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);

  const getShowedPages = (page, maxPages) =>{
    let showedPages = [];
    let currPage;

    if (maxPages-page < 2) {
      currPage = maxPages - 2;
    } else if (page < 3) {
      currPage = 3;
    } else {
      currPage = page;
    }

    for (let i=-2; i<3; i++){
        if ((currPage+i < 1) || (currPage+i > maxPages)){
          continue;
        }
        showedPages.push(currPage+i);
      }
    
    return showedPages;
  }
  const [showedPages, setShowedPages] = useState(getShowedPages(1, 5))


  const changePage = (page) => {
    setCurrentPage(page);
  };

  const nextPage = () => {
    if(currentPage < maxPages){
      const newCurrentPage= currentPage + 1;
      setCurrentPage(newCurrentPage);
      setShowedPages(getShowedPages(newCurrentPage, maxPages)); //refresh the list of shown pages when changing
    }
  }

  const previousPage = () =>{
    console.log("Previous:", currentPage);
    if(currentPage > 1){
      const newCurrentPage= currentPage - 1;
      setCurrentPage(newCurrentPage);
      setShowedPages(getShowedPages(newCurrentPage, maxPages)); //refresh the list of shown pages when changing
    }
  }

  const changeMaximumPage = (exercisesCount) => {
    const newMaxPage = Math.ceil(exercisesCount / itemsEachPage)
    setCurrentPage(1);
    setMaxPages(newMaxPage);
    setShowedPages(getShowedPages(1 , newMaxPage)); //refresh the list of shown pages when changing
  }

  return {
    currentPage,
    changePage,
    nextPage,
    previousPage,
    changeMaximumPage,
    showedPages,
  };
}
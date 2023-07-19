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
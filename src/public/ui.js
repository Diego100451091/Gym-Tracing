import { saveExerciseSet } from "./sockets.js";

const setLists = document.querySelector("#sets-list");

/** Return the UI element of an exercise set
 * @param {object} exerciseSet
 * @param {string} exerciseSet.name
 * @param {string} exerciseSet.description
 * @param {string[]} exerciseSet.exercises
 * @returns {HTMLElement}
 */
const exerciseSetUI = (exerciseSet) => {
  const setItem = document.createElement("li");
  setItem.classList.add("set-item");

  setItem.innerHTML = `
    <h3 class="set-item__title">${exerciseSet.name}</h3>
    <p class="set-item__description">${exerciseSet.description}</p>
    ${exerciseSet.exercises ? `<button class="set-item__expand">Expand</button>` : ""}
    <button class="set-item__delete">Delete</button>
  `;
  
  return setItem;
};

/** Render the exercise sets into the list of sets element
 * @param {object[]} sets
 * @param {string} sets[].name
 * @param {string} sets[].description
 * @param {string[]} sets[].exercises
 */
export const renderExerciseSets = (sets) => {
  sets.forEach((set) => setLists.appendChild(exerciseSetUI(set)));
};

export const onHandleSubmitSetForm = (event) => {
  event.preventDefault();
  console.log(event);
  saveExerciseSet(
    event.target["title"].value,
    event.target["description"].value,
    []
  );
};

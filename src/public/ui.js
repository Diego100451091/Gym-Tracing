import { saveExerciseSet } from "./sockets.js";

const PAGE_TYPES = Object.freeze({
  NEW_DAY: "new-day",
  TRAINING_SETS: "training-sets",
  PROGRESS: "progress",
  SETTINGS: "settings",
});
const setLists = document.querySelector("#sets-list");
let currentPage = "training-sets";

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
    ${
      exerciseSet.exercises
        ? `<button class="set-item__expand">Expand</button>`
        : ""
    }
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

/** Change the main page to the new page
 * @param   {string}  new_page  The new page that will be shown
 */
export const changeMainPage = (new_page) => {
  // Check if the new page is in the valid types
  if (
    currentPage !== new_page &&
    Object.values(PAGE_TYPES).includes(new_page)
  ) {
    console.log("New page: ", new_page);
    // Update the nav item
    document
      .querySelector(`[data-page="${currentPage}"]`)
      .classList.remove("active-nav-item");
    document
      .querySelector(`[data-page="${new_page}"]`)
      .classList.add("active-nav-item");

    // Show only the current page
    document
      .querySelector(`#page_${currentPage}`)
      .classList.remove("active-main-container");
    document
      .querySelector(`#page_${new_page}`)
      .classList.add("active-main-container");

    // Update the current page
    currentPage = new_page;
  }
};

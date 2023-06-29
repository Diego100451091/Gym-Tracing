import { loadExerciseSets } from "./sockets.js";
import { renderExerciseSets, onHandleSubmitSetForm } from "./ui.js";
import { ExercisesList } from './exercisesList.js'

loadExerciseSets(renderExerciseSets);

const setForm = document.querySelector("#new-set-form");
setForm.addEventListener("submit", onHandleSubmitSetForm);

const PAGE_TYPES = Object.freeze({
  NEW_DAY: "new-day",
  TRAINING_SETS: "training-sets",
  PROGRESS: "progress",
  SETTINGS: "settings",
});

let current_page = changePage(PAGE_TYPES.NEW_DAY, PAGE_TYPES.TRAINING_SETS);

function changePage(current_page, new_page) {
  // Check if the new page is in the valid types
  if (
    current_page !== new_page &&
    Object.values(PAGE_TYPES).includes(new_page)
  ) {
    console.log("New page: ", new_page);
    // Update the nav item
    document
      .querySelector(`[data-page="${current_page}"]`)
      .classList.remove("active-nav-item");
    document
      .querySelector(`[data-page="${new_page}"]`)
      .classList.add("active-nav-item");

    // Show only the current page
    Object.values(PAGE_TYPES).forEach(page => {
      document.querySelector(`#page_${page}`).style.display = 'none';
    })
    document.querySelector(`#page_${new_page}`).style.display = 'flex';

    return new_page;
  }
  return current_page;
}

window.addEventListener("load", () => {
  document.querySelectorAll(".mobile-nav__item").forEach((item) => {
    item.addEventListener("pointerup", (event) => {
      current_page = changePage(current_page, event.target.dataset.page);
    });
  });
  const exerciseList = new ExercisesList(document.getElementById("exercises-list"));
  exerciseList.render();
});

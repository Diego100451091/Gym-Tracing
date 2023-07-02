import { loadExerciseSets } from "./sockets.js";
import { renderExerciseSets, onHandleSubmitSetForm, changeMainPage } from "./ui.js";
import { ExercisesList } from './exercisesList.js'

loadExerciseSets(renderExerciseSets);

const setForm = document.querySelector("#new-set-form");
setForm.addEventListener("submit", onHandleSubmitSetForm);
document.querySelectorAll(".mobile-nav__item").forEach((item) => {
  item.addEventListener("pointerup", (event) => changeMainPage(event.target.dataset.page));
});

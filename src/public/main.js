import { loadExerciseSets, onNewExercise} from "./sockets.js";
import { renderExerciseSets, onHandleSubmitSetForm, changeMainPage, appendExerciseSet} from "./ui.js";

onNewExercise(appendExerciseSet);
loadExerciseSets(renderExerciseSets);

const setForm = document.querySelector("#new-set-form");
setForm.addEventListener("submit", onHandleSubmitSetForm);
document.querySelectorAll(".mobile-nav__item").forEach((item) => {
  item.addEventListener("pointerup", (event) => changeMainPage(event.target.dataset.page));
});

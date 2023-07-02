import exercises from "./exercises.js";

export class ExercisesList {
  constructor(listContainer) {
    this.listContainer = listContainer;
    this.exercises = exercises;
    this.exercisesIds = Object.keys(this.exercises);
    this.selectedCategories = [];
    this.selectedExercises = [];

    // Render the list of exercises when the object is created
    this.render();
  }

  _getExerciseUI = (exercise) => {
    const exUI = document.createElement("li");
    exUI.classList.add("exercise-list__item");
    exUI.innerHTML = `
            <div class="exercise-list__item__image">
                <img src="${exercise.imagen}" alt="${exercise.nombre}">
            </div>
            <div class="exercise-list__item__info">
                <h3 class="exercise-list__item__info__title">${exercise.nombre}</h3>
                <p class="exercise-list__item__info__muscle">Main muscle: ${exercise.musculo}</p>
                <p class="exercise-list__item__info__description">${exercise.descripcion}</p>

            </div>
            <input type="checkbox" class="exercise-list__checkbox" data-id="${exercise.id}">
        `;

    const checkbox = exUI.querySelector(".exercise-list__checkbox");
    checkbox.addEventListener("click", () =>
      this._onClickExerciseCheckbox(checkbox)
    );
    return exUI;
  };

  _onClickExerciseCheckbox = (checkboxEl) => {
    if (checkboxEl.checked) {
      this.selectedExercises.push(checkboxEl.dataset.id);
    } else {
      const index = this.selectedExercises.indexOf(checkboxEl.dataset.id);
      this.selectedExercises.splice(index, 1);
    }
    console.log(this.selectedExercises);
  };

  _checkSelectedCategory = (id) => {
    if (this.selectedCategories.length === 0) {
      return true;
    }

    const exercise = this.getExercise(id);
    return this.selectedCategories.includes(exercise.categoria);
  };

  render = () => {
    this.listContainer.innerHTML = "";
    this.exercisesIds.forEach((id) => {
      if (!this._checkSelectedCategory(id)) {
        return;
      }
      const exercise = this.getExercise(id);
      const exerciseCard = this._getExerciseUI(exercise);
      this.listContainer.appendChild(exerciseCard);
    });
  };

  getExercises = () => {
    return this.exercises;
  };

  getSelectedExercises = () => {
    return this.selectedExercises;
  };

  getExercise = (id) => {
    return this.exercises[id];
  };
}

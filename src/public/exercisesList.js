import exercises from "./exercises.js";

export class ExercisesList {
  constructor(listContainer) {
    this.listContainer = listContainer;
    this.exercises = exercises;
    this.exercisesIds = Object.keys(this.exercises);
    this.allCategories = this._getAllCategories();
    this.selectedCategory = "All";
    this.selectedExercises = [];

    // Render the list of exercises when the object is created
    this.render();
  }

  _getAllCategories = () => {
    let categories = ["All"];
    this.exercisesIds.forEach((id) => {
      const exercise = this.getExercise(id);
      const category =
        exercise.categoria[0].toUpperCase() + exercise.categoria.slice(1);
      if (!categories.includes(category)) {
        categories.push(category);
      }
    });
    return categories;
  };

  _getExerciseUI = (exercise) => {
    const exUI = document.createElement("li");
    exUI.classList.add("exercise-card");
    exUI.innerHTML = `
          <div class="main-content">
            <div class="image">
                <img src="${exercise.imagen}" alt="${exercise.nombre}">
            </div>
            <div class="information">
                <h3 class="title">${exercise.nombre}</h3>
                <p class="muscle">Main muscle: ${exercise.musculo}</p>
                <p class="category">Category: ${exercise.categoria}</p>
            </div>
            <input type="checkbox" class="checkbox" data-id="${exercise.id}">
          </div>
          <button class="description-button" data-active="false">
            Show description
            <i class="fas fa-chevron-down"></i>  
          </button>
          <p class="description">
            ${exercise.descripcion}
          </p>
        `;

    const descriptionButton = exUI.querySelector(".description-button");
    descriptionButton.addEventListener("click", () => {
      const description = exUI.querySelector(
        ".description"
      );
      description.classList.toggle("visible");
      if (descriptionButton.dataset.active === "false") {
        descriptionButton.dataset.active = "true";
        descriptionButton.innerHTML =
          "Hide description <i class='fas fa-chevron-up'></i>";
      } else {
        descriptionButton.dataset.active = "false";
        descriptionButton.innerHTML =
          "Show description <i class='fas fa-chevron-down'></i>";
      }
    });

    const checkbox = exUI.querySelector(".checkbox");
    checkbox.addEventListener("click", () =>
      this._onClickExerciseCheckbox(exUI, checkbox)
    );

    return exUI;
  };

  _onClickExerciseCheckbox = (exEl, checkboxEl) => {
    if (checkboxEl.checked) {
      this.selectedExercises.push(checkboxEl.dataset.id);
      exEl.classList.add("active")
    } else {
      const index = this.selectedExercises.indexOf(checkboxEl.dataset.id);
      this.selectedExercises.splice(index, 1);
      exEl.classList.remove("active")
    }
    console.log(this.selectedExercises);
  };

  _checkSelectedCategory = (id) => {
    if (this.selectedCategory === "All") {
      return true;
    }

    const exercise = this.getExercise(id);
    return (
      this.selectedCategory.toLowerCase() === exercise.categoria.toLowerCase()
    );
  };

  renderFilter = () => {
    const categoryFilter = document.getElementById("category-filter");
    this.allCategories.forEach((category) => {
      const option = document.createElement("option");
      option.value = category;
      option.text = category;
      categoryFilter.appendChild(option);
    });

    categoryFilter.addEventListener("change", () => {
      const selectedCategory = Array.from(categoryFilter.options).filter(
        (option) => option.selected
      )[0].value;
      this.selectedCategory = selectedCategory;
      this.renderExercisesList();
    });
  };

  renderExercisesList = () => {
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

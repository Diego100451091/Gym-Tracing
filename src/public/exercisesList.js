import exercises from "./exercises.js";

export class ExercisesList {
    constructor(listContainer) {
        this.listContainer = listContainer;
        this.exercises = exercises;
        this.exercisesIds = Object.keys(this.exercises);
        this.selectedCategories = ["pecho"];
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
                <p class="exercise-list__item__info__description">${exercise.descripcion}</p>
                <p class="exercise-list__item__info__category">${exercise.categoria}</p>
            </div>
            <input type="checkbox" class="exercise-list__selected-input" data-id="${exercise.id}">
        `;
        return exUI;
    }

    _checkSelectedCategory = (id) => {
        if (this.selectedCategories.length === 0) {
            return true;
        }

        const exercise = this.getExercise(id);
        return this.selectedCategories.includes(exercise.categoria);
    }

    render = () => {
        this.listContainer.innerHTML = "";
        this.exercisesIds.forEach(id => {
            if (!this._checkSelectedCategory(id)){
                return;
            }
            const exercise = this.getExercise(id);
            const exerciseCard = this._getExerciseUI(exercise);
            this.listContainer.appendChild(exerciseCard);
        })
    }
    
    getExercises = () => {
        return this.exercises;
    }

    getSelectedExercises = () => {
        const selectedInputs = document.querySelectorAll(".exercise-list__selected-input:checked");
        const selectedExercises = [];
        selectedInputs.forEach(input => {
            const id = input.dataset.id;
            const exercise = this.getExercise(id);
            selectedExercises.push(exercise);
        })
        return selectedExercises;
    }
    
    getExercise = (id) => {
        return this.exercises[id];
    }

    
}
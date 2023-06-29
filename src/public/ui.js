import { saveExerciseSet } from "./sockets.js";

const PAGE_TYPES = Object.freeze({
  NEW_DAY: "new-day",
  TRAINING_SETS: "training-sets",
  PROGRESS: "progress",
  SETTINGS: "settings",
});
let currentPage = PAGE_TYPES.TRAINING_SETS;
const setLists = document.querySelector("#sets-list");
const trainingSetContainer = document.querySelector("#training-set__container");
const [creatorNavItem, setsNavItem] = document.querySelectorAll(".training-set__nav-item");

// Listeners for events
creatorNavItem.addEventListener("click", () => setViewCreateSet());
setsNavItem.addEventListener("click", () => setViewTrainingSets());

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

/** Translate the training sets page container when the user move the pointer over it
 * @param {TouchEvent} event
 */
const onMoveTrainingSetContainer = (event) => {
  const startX = trainingSetContainer.dataset.startMove
    ? trainingSetContainer.dataset.startMove
    : 0;
  const currentX = event.touches[0].clientX;

  if (startX == 0) {
    trainingSetContainer.dataset.startMove = currentX;
  } else {
    const offset = currentX - startX;
    let translation = 0;
    // Check if the training set container is already translated
    if (trainingSetContainer.dataset.isTranslated === "true") {
      // Add the screen width to the translation for save the current translation
      translation = -(screen.width - offset);
    } else {
      // The translation will be the actual offset, because the current translation is 0
      translation = offset;
    }

    // Move the container between the screen zone
    if (translation > 0) {
      trainingSetContainer.style.transform = `translate(0px)`;
    } else if (translation < -screen.width) {
      trainingSetContainer.style.transform = `translate(-${screen.width}px)`;
    } else {
      trainingSetContainer.style.transform = `translate(${translation}px)`;
    }
  }
};

/** Manage the end of the touch event over the training set container*/
const onTouchEndTrainingSetContainer = () => {
  // Get the element of the container, to know its position after the translation
  const divElement = trainingSetContainer.getBoundingClientRect();
  // Get the position of the middle of the container
  const middlePosition = divElement.left + divElement.width / 2;
  if (middlePosition < screen.width / 2) {
    // If the middle position is less than the center, set the training set view
    setViewTrainingSets();
  } else {
    // If the middle position is greater than the center, set the create set view
    setViewCreateSet();
  }
  // Reset the values of the container
  trainingSetContainer.dataset.startMove = 0;
  trainingSetContainer.dataset.offset = 0;
};

/** Set the 'create set' view as the visible one*/
const setViewCreateSet = () => {
  // Change the nav items style
  creatorNavItem.classList.add("active-training-set__nav-item");
  setsNavItem.classList.remove("active-training-set__nav-item");
  // Move the container set to show the properly view
  trainingSetContainer.style.transform = `translate(0)`;
  trainingSetContainer.dataset.isTranslated = "false";
};

/** Set the 'training sets' view as the visible one, and change the nav style */
const setViewTrainingSets = () => {
  // Change the nav items style
  creatorNavItem.classList.remove("active-training-set__nav-item");
  setsNavItem.classList.add("active-training-set__nav-item");
  // Move the container set to show the properly view
  trainingSetContainer.style.transform = `translate(-${screen.width}px)`;
  trainingSetContainer.dataset.isTranslated = "true";
};

document.body.addEventListener("touchmove", function (event) {
  // Search if the element that has been moved is into the container
  let parent = event.target;
  while (parent.tagName != "BODY") {
    if (parent.id == "training-set__container") {
      // Execute the event handler
      onMoveTrainingSetContainer(event);
      break;
    }
    // Get the parent node until the 'body'
    parent = parent.parentNode;
  }
});

document.body.addEventListener("touchend", function (event) {
  // Search if the element that has been 'touchend' is into the container
  let parent = event.target;
  while (parent.tagName != "BODY") {
    if (parent.id == "training-set__container") {
      // Execute the event handler
      onTouchEndTrainingSetContainer();
      break;
    }
    // Get the parent node until the 'body'
    parent = parent.parentNode;
  }
});


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
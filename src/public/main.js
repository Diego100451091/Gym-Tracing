const socket = io.connect("http://localhost:3000/", {'forceNew': true});

socket.on("messages", function(data) {
    console.log(data);
})


const PAGE_TYPES = Object.freeze({
    NEW_DAY: "new-day",
    TRAINING_SETS: "training-sets",
    PROGRESS: "progress",
    SETTINGS: "settings"
})

let current_page = PAGE_TYPES.NEW_DAY;

function changePage (new_page){
    // Check if the new page is in the valid types
    if (current_page !== new_page && Object.values(PAGE_TYPES).includes(new_page)){
        console.log("New page: ", new_page)
        // Update the nav item
        document.querySelector(`[data-page="${current_page}"]`).classList.remove("active-nav-item");
        document.querySelector(`[data-page="${new_page}"]`).classList.add("active-nav-item");

        // // Hide the current page
        // document.getElementById(`page_${current_page}`).style.display = "none";
        // // Show the new page
        // document.getElementById(`page_${new_page}`).style.display = "flex";

        // Update the current page
        current_page = new_page;
    }
}

window.addEventListener("load", () => document.querySelectorAll(".mobile-nav__item").forEach((item) => {
    item.addEventListener("pointerup", (event) => {
        changePage(event.target.dataset.page);
    })
}))
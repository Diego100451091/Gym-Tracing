import Swal from "sweetalert2";

export const throwSimpleError = (title, message) => {
  Swal.fire({
    title: title,
    html: message,
    icon: "error",
    confirmButtonText: "Ok",
    confirmButtonColor: "#b65e11",
  });
};

export const throwTemporalError = (message) => {
    temporalNotification.fire({
        icon: "error",
        html: message,
    });
}

export const throwTemporalSuccess = (message) => {
  temporalNotification.fire({
    icon: "success",
    html: message,
  });
}

const temporalNotification = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener("mouseenter", Swal.stopTimer);
    toast.addEventListener("mouseleave", Swal.resumeTimer);
  },
});
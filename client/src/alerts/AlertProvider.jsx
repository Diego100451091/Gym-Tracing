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
};

export const throwErrorWithCallback = (message, callback, buttonMessage) => {
  Swal.fire({
    title: "Error",
    html: message,
    icon: "error",
    confirmButtonText: buttonMessage,
    confirmButtonColor: "#b65e11",
  }).then((result) => {
    if (result.isConfirmed) {
      callback();
    }
  });
}

export const throwTemporalSuccess = (message) => {
  temporalNotification.fire({
    icon: "success",
    html: message,
  });
};

export const throwCustomImage = (
  title,
  message,
  imageUrl,
  imageAlt,
  width,
  height
) =>
  Swal.fire({
    title: title,
    html: message,
    imageUrl: imageUrl,
    imageWidth: typeof width == "number" ? width : 200,
    imageHeight: typeof height == "number" ? height : 200,
    imageAlt: imageAlt,
    confirmButtonColor: "#b65e11",
  });

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

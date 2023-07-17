import Swal from 'sweetalert2'

export const thowSimpleError = (title, message) => {
    Swal.fire({
        title: title,
        html: message,
        icon: 'error',
        confirmButtonText: 'Ok',
        confirmButtonColor: "#b65e11",
    })
}
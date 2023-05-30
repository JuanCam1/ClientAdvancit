import Swal from 'sweetalert2';

export const swartAlert = (mensaje: string, icon: any) => {
  Swal.fire({
    position: 'center',
    icon: icon,
    title: `${mensaje}!`,
    showConfirmButton: false,
    timer: 1500,
  });
};

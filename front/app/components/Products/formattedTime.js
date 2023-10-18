export const formattedTime = (unformatDate) => {
     const endDate = new Date(unformatDate);

     // Obtén la fecha y hora actual
     const currentDate = new Date();

     // Calcula la diferencia en milisegundos
     const timeDifference = Math.abs(endDate - currentDate);

     // Convierte la diferencia en días, horas, minutos y segundos
     const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
     const hours = Math.floor(
          (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
     );
     const minutes = Math.floor(
          (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
     );
     const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

     // Formatea el resultado
     return `${days} días ${hours}:${minutes}:${seconds}`;
};

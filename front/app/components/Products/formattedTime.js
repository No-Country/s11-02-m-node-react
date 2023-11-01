export const formattedTime = (unformatDate) => {
     const endDate = new Date(unformatDate);
     console.log('end', endDate);
     // Obtén la fecha y hora actual
     const currentDate = new Date();
     console.log('current', currentDate);
     // Calcula la diferencia en milisegundos
     const timeDifference = endDate - currentDate;

     // Convierte la diferencia en días, horas, minutos y segundos
     const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
     const hours = Math.floor(
          (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
     );
     const minutes = Math.floor(
          (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
     );
     const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

     // Comprueba si la fecha está en el pasado y ajusta los valores
     const isPast = timeDifference < 0;
     if (isPast) {
          return `-${Math.abs(days)} días ${Math.abs(hours)}:${Math.abs(
               minutes
          )}:${Math.abs(seconds)}`;
     } else {
          return `${days} días ${hours} horas`;
     }
};

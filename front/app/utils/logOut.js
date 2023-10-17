import mainRoute from '@/route';

export const logOutUser = async () => {
     try {
          const response = await fetch(`${mainRoute}/auth/logout`, {
               method: 'POST',
               headers: {
                    'Content-Type': 'application/json', // Ajusta el encabezado según sea necesario
               },
               //body: JSON.stringify({ /* Tus datos de logout */ }),
          });
          if (response.ok) {
               console.log('Sesion de usuario finalizada');
               // Borrar token de localStorage
               localStorage.removeItem('access_token');
          } else {
               console.error('Error al realizar el logout:', response.status);
          }
     } catch (error) {
          console.error('Error al realizar el logout:', error);
     }
};

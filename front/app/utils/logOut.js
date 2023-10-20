import mainRoute from '@/route';

export const logOutUser = async () => {
     try {
          // Obtiene el token almacenado en localStorage
          const accessToken = localStorage.getItem('access_token');

          if (!accessToken) {
               console.error(
                    'No se encontró el token de acceso en el almacenamiento local'
               );
               return;
          }

          const response = await fetch(`${mainRoute}/auth/logout`, {
               method: 'POST',
               headers: {
                    'Content-Type': 'application/json',
                    // Agrega el token de acceso al encabezado de autorización
                    Authorization: `Bearer ${accessToken}`,
               },
          });

          if (response.ok) {
               console.log('Sesión de usuario finalizada');
               // Borrar token de localStorage
               localStorage.removeItem('access_token');
          } else {
               console.error('Error al realizar el logout:', response.status);
          }
     } catch (error) {
          console.error('Error al realizar el logout:', error);
     }
};

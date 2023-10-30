const backendURL = 'https://reutilizzappapi.onrender.com';

export async function getUserInfo(userId) {
     try {
          const response = await fetch(`${backendURL}/users/${userId}`, {
               method: 'GET',
               headers: {
                    'Content-Type': 'application/json',
               },
          });

          if (response.ok) {
               const data = await response.json();
               return data.user;
          }
     } catch (error) {
          console.error('Error en la solicitud a /users/id:', error);
     }

     return null; // Devuelve null si hay un error o la respuesta no es exitosa
}

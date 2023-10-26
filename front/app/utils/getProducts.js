const backendURL = 'https://reutilizzappapi.onrender.com';

export const fetchProducts = async () => {
     try {
          const response = await fetch(`${backendURL}/products`);
          if (!response.ok) {
               throw new Error('No se pudo obtener la lista de productos');
          }
          const data = await response.json();
          return data.products;
     } catch (error) {
          console.error('Error al obtener productos', error);
          return [];
     }
};

export const fetchProductsFilter = async (category) => {
     try {
          const response = await fetch(
               `${backendURL}/products?firstCategory=${category}`
          );
          if (!response.ok) {
               throw new Error('No se pudo obtener la lista de productos');
          }
          const data = await response.json();
          return data.products;
     } catch (error) {
          console.error('Error al obtener productos', error);
          return [];
     }
};

export const getProduct = async (id) => {
     try {
          const response = await fetch(`${backendURL}/products/${id}`);
          if (!response.ok) {
               throw new Error('No se pudo obtener el producto');
          }
          const data = await response.json();
          return data.product;
     } catch (error) {
          console.error('Error al obtener el producto', error);
          return [];
     }
};

export const getUsers = async (id) => {
     try {
          const response = await fetch(`${backendURL}/users/${id}`);
          if (!response.ok) {
               throw new Error('No se encontro el usuario');
          }
          const data = await response.json();
          return data;
     } catch (error) {
          console.error('Error al encontrar el usuario', error);
          return [];
     }
};

//subastar
export const auction = async (body, id) => {
     try {
          const response = await fetch(`${backendURL}/products/${id}`, {
               method: 'PATCH',
               body: JSON.stringify(body),
               headers: {
                    'Content-type': 'application/json',
               },
          });
          if (response.ok)
               console.log(`se ha actualizado correctamente ${body}`);
     } catch (error) {
          console.error('Error al actualizar los datos', error);
     }
};

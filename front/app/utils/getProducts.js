const backendURL = 'https://reutilizzappapi.onrender.com';
import moment from 'moment';

export const fetchProducts = async () => {
     try {
          const response = await fetch(`${backendURL}/products`);
          if (!response.ok) {
               throw new Error('No se pudo obtener la lista de productos');
          }
          const data = await response.json();

          const currentDate = moment(); // Obtener la fecha actual

          // Iterar a través de los productos y realizar la lógica antes de la declaración de activeProducts
          for (const product of data.products) {
               if (product.status === 'ACTIVE') {
                    const productEndDate = moment(product.endDate);

                    // Comparar la fecha de finalización con la fecha actual
                    if (productEndDate.isBefore(currentDate)) {
                         // Hacer una solicitud PATCH para finalizar el producto
                         await finalizeProduct(product.id);
                    }
               }
          }

          // Filtrar los productos que tienen estado 'ACTIVE' después de la verificación de la fecha
          const activeProducts = data.products.filter(
               (product) => product.status === 'ACTIVE'
          );
          //console.log(activeProducts);
          return activeProducts;
     } catch (error) {
          console.error('Error al obtener productos', error);
          return [];
     }
};

// Función para hacer una solicitud PATCH para finalizar un producto
const finalizeProduct = async (productId) => {
     //console.log('id', productId);
     try {
          const response = await fetch(
               `${backendURL}/products/finalize-product/${productId}`,
               {
                    method: 'PATCH',
                    headers: {
                         'Content-Type': 'application/json',
                    },
               }
          );
          if (!response.ok) {
               throw new Error('No se pudo finalizar el producto');
          }
     } catch (error) {
          console.error('Error al finalizar el producto', error);
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
          const activeProducts = data.products.filter(
               (product) => product.status === 'ACTIVE'
          );

          return activeProducts;
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
export const auction = async (body) => {
     try {
          const response = await fetch(`${backendURL}/products/create-offer`, {
               method: 'POST',
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

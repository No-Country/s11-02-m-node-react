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

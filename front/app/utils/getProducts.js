export const fetchProducts = async () => {
     try {
          const response = await fetch(
               'https://reutilizzappapi.onrender.com/products'
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

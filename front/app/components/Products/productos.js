import Product1 from '@/public/mesa.jpeg';
import Product2 from '@/public/lavarropas.webp';
import Product3 from '@/public/silla.webp';
import Product4 from '@/public/lampara.webp';

export const products = [
     {
          id: 1,
          name: 'Producto 1',
          description:
               'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
          price: '$19.99',
          image: Product1,
          category: 'Muebles',
     },
     {
          id: 2,
          name: 'Producto 2',
          description:
               'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
          price: '$29.99',
          image: Product2,
          category: 'Electro',
     },
     {
          id: 3,
          name: 'Producto 3',
          description:
               'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
          price: '$39.99',
          image: Product3,
          category: 'Otros',
     },
     {
          id: 4,
          name: 'Producto 4',
          description:
               'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
          price: '$22.50',
          image: Product4,
          category: 'Deco',
     },
];

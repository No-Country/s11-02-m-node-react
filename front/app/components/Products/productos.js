import bici from '@/public/bici.png';
import chaqueta from '@/public/chaqueta.png';
import procesadora from '@/public/procesadora.png';
import parlante from '@/public/parlante.png';

export const products = [
     {
          id: 1,
          name: 'Bicicleta MTB marca BH',
          description:
               'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
          price: '$83.000',
          image: bici,
          category: 'Otros',
     },
     {
          id: 2,
          name: 'Chaqueta marrón',
          description:
               'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
          price: '$4.100',
          image: chaqueta,
          category: 'Ropa',
     },
     {
          id: 3,
          name: 'Licuadora marca Atma',
          description:
               'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
          price: '$10.200',
          image: procesadora,
          category: 'Hogar',
     },
     {
          id: 4,
          name: 'Parlante marca JBL',
          description:
               'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
          price: '$18.480',
          image: parlante,
          category: 'Electro',
     },
];

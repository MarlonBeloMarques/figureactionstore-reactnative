/* eslint-disable camelcase */
import product_1 from '../../assets/images/godofwar4.png';
import product_2 from '../../assets/images/metalgearsolid.png';

export function getProducts() {
  const data = [
    {
      id: '1',
      image: product_1,
    },
    {
      id: '2',
      image: product_2,
    },
  ];

  return data;
}

export function getOptions() {
  const data = [
    {
      id: '1',
      name: 'Games',
    },
    {
      id: '2',
      name: 'Animes',
    },
    {
      id: '3',
      name: 'Others',
    },
  ];

  return data;
}

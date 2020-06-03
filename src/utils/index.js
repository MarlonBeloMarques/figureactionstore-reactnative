/* eslint-disable camelcase */
import product_1 from '../../assets/images/godofwar4.png';
import product_2 from '../../assets/images/metalgearsolid.png';
import product_3 from '../../assets/images/metalgearsolid2.png';
import product_4 from '../../assets/images/metalgearsolid3.png';

export function getProducts() {
  const data = [
    {
      id: '1',
      image: product_2,
      other_images: [product_3, product_4],
      title: 'Naked Snake',
      subtitle: 'metal gear solid',
      price: 'R$ 178',
      about:
        'Naked Snake é um dos personagens mais misteriosos e controversos já criados em uma história de video game. E se você jogou Metal Gear Solid 3: Snake Eater, deve ter percebido isso.',
    },
    {
      id: '2',
      image: product_1,
      title: 'Kratos and Atreus',
      subtitle: 'god of war',
      price: 'R$ 300',
      about: '',
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

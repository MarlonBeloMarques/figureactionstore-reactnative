/* eslint-disable camelcase */
import product_0 from '../../assets/images/godofwar.png';
import product_1 from '../../assets/images/godofwar4.png';
import product_2 from '../../assets/images/metalgearsolid.png';
import product_3 from '../../assets/images/metalgearsolid2.png';
import product_4 from '../../assets/images/metalgearsolid3.png';
import product_5 from '../../assets/images/godofwar4-2.jpg';

export function getProducts() {
  const data = [
    {
      id: '1',
      image: product_2,
      width: 860,
      height: 1127,
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
      width: 900,
      height: 600,
      other_images: [product_0, product_5],
      title: 'Kratos and Atreus',
      subtitle: 'god of war',
      price: 'R$ 300',
      about:
        'Kratos é um personagem de jogos eletrônicos da franquia God of War, da Santa Monica Studio, que é baseado nas mitologias grega e nórdica.',
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

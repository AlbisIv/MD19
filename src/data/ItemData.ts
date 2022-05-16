export type Item ={
    id:number,
    title:string,
    price:number,
    imgSrc:string,
    count:number,
}

const items = [
  {
    id: 1,
    title: 'Sīpols',
    price: 1.20,
    imgSrc: 'https://picsum.photos/id/292/250/200',
    count: 1,
  },
  {
    id: 2,
    title: 'Sunīc',
    price: 299.99,
    imgSrc: 'https://picsum.photos/id/1062/250/200',
    count: 1,
  },
  {
    id: 3,
    title: 'Bebis',
    price: 537.77,
    imgSrc: 'https://picsum.photos/id/1066/250/200',
    count: 1,
  },
  {
    id: 4,
    title: 'Zemenes',
    price: 4.50,
    imgSrc: 'https://picsum.photos/id/1080/250/200',
    count: 1,
  },
  {
    id: 5,
    title: 'Ģitāra',
    price: 250,
    imgSrc: 'https://picsum.photos/id/145/250/200',
    count: 1,
  },
  {
    id: 6,
    title: 'Jahta',
    price: 40200.25,
    imgSrc: 'https://picsum.photos/id/211/250/200',
    count: 1,
  },
  {
    id: 7,
    title: 'Kompūters',
    price: 650.99,
    imgSrc: 'https://picsum.photos/id/0/250/200',
    count: 1,
  },
  {
    id: 8,
    title: 'Bībele',
    price: 20,
    imgSrc: 'https://picsum.photos/id/1010/250/200',
    count: 1,
  },
  {
    id: 9,
    title: 'Sunis+Pleds COMBO',
    price: 300,
    imgSrc: 'https://picsum.photos/id/1025/250/200',
    count: 1,
  },
  {
    id: 10,
    title: 'Mašīna (sēdies un brauc)',
    price: 1000,
    imgSrc: 'https://picsum.photos/id/1072/250/200',
    count: 1,
  },
  {
    id: 11,
    title: 'Simba',
    price: 300,
    imgSrc: 'https://picsum.photos/id/1074/250/200',
    count: 1,
  },
  {
    id: 12,
    title: 'Veiksmīgas attiecības',
    price: 125,
    imgSrc: 'https://picsum.photos/id/1083/250/200',
    count: 1,
  },
];

export const getItems = () => [...items];
export const getItem = (id: number) => items.find((item) => item.id === id);
export default items;

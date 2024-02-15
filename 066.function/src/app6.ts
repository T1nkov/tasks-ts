// У вас есть массив объектов вида приведенного в приложении. Необходимо
// вывести средний прайс среди всех продуктов

interface arr {
  readonly id: number;
  title: string;
  count: number;
  price: number;
}

const arr_112: arr[] = [
  { id: 1, title: "Часы", count: 10, price: 500 },
  { id: 2, title: "Смартфон", count: 33, price: 1500 },
  { id: 3, title: "Моноблок", count: 6, price: 2200 },
  { id: 4, title: "Ноутбук", count: 13, price: 3000 },
  { id: 5, title: "Планшет", count: 22, price: 2100 },
];

function srPrice(arr_112: arr[]): number {
  let price: number = 0;
  arr_112.forEach((el) => {
    price += el.price;
  });
  return price / arr_112.length;
}

const ress = srPrice(arr_112);

console.log(ress);

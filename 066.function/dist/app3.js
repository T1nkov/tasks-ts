// У вас есть массив объектов вида приведенного в приложении. Необходимо
// вывести только те товары из положения, количество которых внутри массива
// кратно 3
const arr_12 = [
    { id: 1, title: "Часы", count: 10, price: 500 },
    { id: 2, title: "Смартфон", count: 33, price: 1500 },
    { id: 3, title: "Моноблок", count: 6, price: 2200 },
    { id: 4, title: "Ноутбук", count: 13, price: 3000 },
    { id: 5, title: "Планшет", count: 22, price: 2100 },
];
// function doArr(arr_12: arr[]): arr[] {
//   const arrNew = [];
//   arr_12.forEach((el) => {
//     if (el.count % 3 == 0) {
//       arrNew.push(el);
//     }
//   });
//   return arrNew;
// }
// const res543 = doArr(arr_12);
// console.log(res543);
function doArr(arr_12) {
    const res43 = arr_12.filter((el) => el.count % 3 == 0);
    return res43.reverse();
}
const res543 = doArr(arr_12);
console.log(res543);

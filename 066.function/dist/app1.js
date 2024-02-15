// У вас есть массив объектов вида приведенного в приложении. Необходимо
// вывести все товары, количество которых больше 10
const arr_1 = [
    { id: 1, title: "Часы", count: 10, price: 500 },
    { id: 2, title: "Смартфон", count: 33, price: 1500 },
    { id: 3, title: "Моноблок", count: 6, price: 2200 },
    { id: 4, title: "Ноутбук", count: 13, price: 3000 },
    { id: 5, title: "Планшет", count: 22, price: 2100 },
];
// function doMore(arr_1: arr[]): arr[] {
//   const res = arr_1.filter((el) => {
//     return el.count > 10;
//   });
//   return res;
// }
// const res111 = doMore(arr_1);
// console.log(res111);
function doMore(arr_1) {
    const newArr = [];
    arr_1.forEach((el) => {
        if (el.count > 10) {
            newArr.push(el);
        }
    });
    return newArr;
}
const res111 = doMore(arr_1);
console.log(res111);

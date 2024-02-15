// У вас есть массив объектов вида приведенного в приложении. Необходимо
// вывести товар с максимальным прайсом
const arr_132 = [
    { id: 1, title: "Часы", count: 10, price: 500 },
    { id: 2, title: "Смартфон", count: 33, price: 1500 },
    { id: 3, title: "Моноблок", count: 6, price: 2200 },
    { id: 4, title: "Ноутбук", count: 13, price: 3000 },
    { id: 5, title: "Планшет", count: 22, price: 2100 },
];
function doPrice(arr_132) {
    let price = 0;
    arr_132.forEach((el) => {
        if (price < el.price) {
            price = el.price;
        }
    });
    const res123 = arr_132.filter((el) => price == el.price);
    return res123;
}
const res12323 = doPrice(arr_132);
console.log(res12323);

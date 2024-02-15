// У вас есть массив объектов вида приведенного в приложении. Необходимо
// вывести тот товар, где количество * прайс является наибольшим значением
const arr2 = [
    { id: 1, title: "Часы", count: 10, price: 500 },
    { id: 2, title: "Смартфон", count: 33, price: 1500 },
    { id: 3, title: "Моноблок", count: 6, price: 2200 },
    { id: 4, title: "Ноутбук", count: 13, price: 3000 },
    { id: 5, title: "Планшет", count: 22, price: 2100 },
];
function bigInt(arr2) {
    let count = 0;
    let num = 0;
    arr2.forEach((el) => {
        if (count < el.count * el.price) {
            num = el.id;
        }
    });
    const res44 = arr2.filter((el) => el.id == num);
    return res44;
}
const ress12 = bigInt(arr2);
console.log(ress12);

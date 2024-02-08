// На входе динамичный массив чисел. Используя reduce выведите сумму чисел
// массива
const arr3 = [];
for (let i = 0; i < Math.floor(Math.random() * 10); i++) {
    arr3.push(Math.floor(Math.random() * 10));
}
console.log(arr3);
const res = arr3.reduce((sum, el) => {
    return sum + el;
}, 0);
console.log(res);

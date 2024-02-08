// Создайте динамический массив строк. Используя Some выведите true в случае
// если хотя бы 1 элемент массива имеет длину > 5 символов.
const arr4 = [];
for (let i = 0; i < 5; i++) {
    arr4.push(prompt(""));
}
console.log(arr4);
const res1 = arr4.some((el) => {
    return el.length > 5 ? true : false;
});
console.log(res1);

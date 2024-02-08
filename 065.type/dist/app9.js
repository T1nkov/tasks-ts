// Создайте массив из чисел и строк и удалите из него все повторяющиеся
// элементы, оставив только уникальные значения.
const arr9 = ["asd", 2, 2, 2, 2, "asd", "dima"];
const res9 = arr9.filter((el, index, arr) => {
    return arr.indexOf(el) == index;
});
console.log(res9);

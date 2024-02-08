// Создайте массив строк и проверьте, есть ли в нем хотя бы одно слово-палиндром.
const arr8 = ["ana", "dima", "asd", "hannah", "ANnA"];
const res8 = arr8.filter((el) => {
    return el.toLowerCase().split("").reverse().join("") == el.toLowerCase();
});
console.log(res8);

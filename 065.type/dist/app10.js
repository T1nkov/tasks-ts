// . Создайте массив строк и преобразуйте каждую строку в новую строку,
// содержащую только гласные буквы.
const arr10 = ["dima", "paha", "diana"];
const res0 = arr10.map((el, index) => {
    return el
        .split("")
        .filter((el) => {
        return "aeoiu".includes(el.toLowerCase());
    })
        .join("");
});
console.log(res0);

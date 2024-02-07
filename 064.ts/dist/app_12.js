// Создайте переменную str и присвойте ей строковое значение. Используя цикл
// while, замените все гласные символы в строке на символ *.
const str2 = "LALALALLALALALAL";
const arr1 = ["a", "e", "o", "u", "i", "y"];
const arr2 = [];
let count = 0;
while (count < str2.length) {
    if (arr1.includes(str2[count].toLowerCase())) {
        arr2.push("*");
    }
    else {
        arr2.push(str2[count]);
    }
    count++;
}
console.log(arr2.join(""));

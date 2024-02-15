// 9. Напишите код, который сделает из массива объект
// [ {name: 'width', value: 10}, {name: 'height', value: 20} ] -> {width: 10, height: 20}
const arr34 = [
    { name: "width", value: 10 },
    { name: "height", value: 20 },
];
const obj = {};
function doObj(arr34) {
    arr34.forEach((el) => {
        obj[el.name] = el.value;
    });
    return obj;
}
const res = doObj(arr34);
console.log(res);

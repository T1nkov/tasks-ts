// 0. Реализовать функцию f: при вызове f(2, 3) -> вернет 5, при вызове f(2)(3), тоже
// вернет 5. Использовать каррирование
function doA(...a) {
    if (arguments.length == 2) {
        return a + arguments[1];
    }
    else {
        return (b) => {
            return a + b;
        };
    }
}
console.log(doA(23));


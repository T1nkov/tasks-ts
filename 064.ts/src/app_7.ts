// Напишите программу, которая находит факториал заданного числа num и
// выводит результат в консоль.

const num: number = 5;

let factorial: number = 1;

for (let i = 1; i <= 5; i++) {
  factorial *= i;
}

console.log(factorial);

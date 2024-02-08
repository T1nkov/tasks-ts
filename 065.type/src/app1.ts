// Создайте массив чисел и найдите сумму всех нечетных элементов в массиве.

const arr: number[] = [1, 2, 3, 4, 5, 6];

let sum: number = 0;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 != 0) {
    sum += arr[i];
  }
}

console.log(sum);

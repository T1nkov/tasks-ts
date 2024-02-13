// На входе динамичный массив чисел. Используя map выведите массив строк
// четности и нечетности, в соответствии со значением числа:
// [1, 2, 3, 4, 5, 6] -> [“нечет”, “чет”, “нечет”, “чет”, “нечет”, “чет”]

const arr13: number[] = [1, 2, 3, 4, 5, 6];

const arr133: string[] = [];

// const arr123: string[] = arr13.map((el) => (el % 2 == 0 ? "чет" : "нечет"));

// arr13.forEach((el) =>
//   el % 2 == 0 ? arr133.push("чет") : arr133.push("нече1т")
// );

// for (let i = 0; i < arr13.length; i++) {
//   if (arr13[i] % 2 == 0) {
//     arr133.push("чет");
//   } else {
//     arr133.push("нечет");
//   }
// }

// for (let el of arr13) {
//   if (el % 2 == 0) arr133.push("чет");
//   else arr133.push("нечет");
// }

let n: number = 0;

// do {
//   if (arr13[n] % 2 == 0) arr133.push("chet");
//   else arr133.push("nechet");
//   n++;
// } while (n < arr13.length);

while (n < arr13.length) {
  if (arr13[n] % 2 == 0) arr133.push("chet");
  else arr133.push("nec1het");
  n++;
}

console.log(arr133);

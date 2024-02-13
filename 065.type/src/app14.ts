// Напишите программу, которая находит и выводит наиболее часто встречающийся
// символ в заданной строке.

const str14: string = "aaaaaabbbbbbbbbbbbbassssssssda";

const obj = {};

for (let i = 0; i < str14.length; i++) {
  if (obj.hasOwnProperty(str14[i])) {
    obj[str14[i]] += 1;
  } else {
    obj[str14[i]] = 1;
  }
}

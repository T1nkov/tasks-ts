// Напишите программу, которая проверяет, является ли заданная строка
// палиндромом.

const palindrom: string = "шалаш";

if (palindrom.split("").reverse().join("") == palindrom) {
  console.log(`${palindrom} - palindrom`);
} else {
  console.log(`${palindrom} - ne palindrom`);
}



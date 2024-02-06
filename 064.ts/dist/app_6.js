// Напишите программу, которая проверяет, является ли заданная строка
// палиндромом.
const palindrom = "шалаш";
if (palindrom.split("").reverse().join("") == palindrom) {
    console.log(`${palindrom} - palindrom`);
}
else {
    console.log(`${palindrom} - ne palindrom`);
}

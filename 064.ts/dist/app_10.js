// . Напишите программу, которая определяет, является ли заданная строка
// анаграммой (состоит из тех же символов, но в другом порядке) другой строки
const abo = "dima";
const boa = "aasdmid";
console.log(abo.split("").sort().join("") == boa.split("").sort().join()
    ? 'neanag'
    : "anag");

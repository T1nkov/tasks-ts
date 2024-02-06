// Напишите программу, которая принимает строку и возвращает новую строку, в
// которой все символы уникальны (не повторяются). Например, для строки "hello"
// результатом должна быть строка "helo"
const stri = "hello";
const arr = [];
for (let i = 0; i < stri.length; i++) {
    if (!arr.includes(stri[i]))
        arr.push(stri[i]);
}
console.log(arr.join(''));

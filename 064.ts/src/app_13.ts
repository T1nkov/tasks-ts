// Создайте переменную sentence и присвойте ей строковое значение
// предложения. Напишите программу, которая преобразует первую букву каждого
// слова в предложении в верхний регистр. Например, для предложения "hello
// world" результатом должна быть строка "Hello World".

const sentence: string[] = prompt().split(" ");

for (let i = 0; i < sentence.length; i++) {
  let myWord: string = "";
  let word: string = sentence[i];

  myWord = word[0].toLocaleUpperCase().slice(1, word.length);
}

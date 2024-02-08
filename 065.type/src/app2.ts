// Создайте массив строк и выведите на экран все элементы, которые содержат
// букву 'a'.

const arr2: string[] = ["sdf", "as", "asdfasd"];

for (let i = 0; i < arr2.length; i++) {
  if (arr2[i].includes("a")) {
    console.log(arr2[i]);
  }
}

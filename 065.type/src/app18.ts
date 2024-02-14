// Создайте массив объектов, представляющих книги, и найдите книгу где автор
// Булгаков (author – одно из полей объекта)

interface Book {
  id: number;
  author: string;
}

const objArr: Book[] = [
  { id: 1, author: "Толстой" },
  { id: 2, author: "Толстой" },
  { id: 3, author: "Булгаков" },
  { id: 4, author: "Толстой" },
];

const resBook = objArr.filter((el) => {
  return (el.author = "Булгаков");
});

console.log(resBook);

for (let index = 0; index < objArr.length; index++) {
  console.log(objArr[index].author == "Булгаков" ? objArr[index] : "net");
}

for (let el of objArr) {
  console.log(el.author == "Булгаков" ? el : "banan");
}

let b: number = 0;

do {
  console.log(objArr[b].author == "Булгаков" ? objArr[b] : "banan");
  b++;
} while (b < objArr.length);

objArr.forEach((el) => {
  return (el.author = "Булгаков");
});

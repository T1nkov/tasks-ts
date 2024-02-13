// На входе динамичный массив строк. Используя every выведите true если все
// элементы массива соответствуют регулярному выражению почты

const arr11: string[] = [];

for (let i = 0; i < 2; i++) {
  arr11.push(prompt("input anything"));
}

const res11 = arr11.every((el) => {
  if (/^[w\_\-\.]+@[a-z]+\.[a-z]{0,5}/gm.test(el)) return true;
  else return false;
});

console.log(res11);




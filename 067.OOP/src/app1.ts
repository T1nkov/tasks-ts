// Создайте класс Student, который содержит проинициализированные свойства
// name (имя) и age (возраст). Создайте экземпляр класса Student и выведите
// свойства

class Student {
  name: string;
  age: number;
  constructor(a: string, b: number) {
    this.name = a;
    this.age = b;
  }
}

const student = new Student("Dmitry", 20);

console.log(student.name, student.age);

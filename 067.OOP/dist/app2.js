// 2. Создайте класс Student, который содержит свойства name (имя) и age (возраст).
// Инициализация свойств name, age происходит с помощью экземпляра класса.
// Создайте экземпляр класса Student и выведите их свойства.
class Student1 {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const student1 = new Student1("Dmitry", 20);
console.log(student1.name, student1.age);

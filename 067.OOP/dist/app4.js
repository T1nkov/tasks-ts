// 4. Создайте класс Student, который содержит свойства name (имя) и age (возраст).
// Инициализация свойств name, age происходит в getter, setter класса. Создайте
// экземпляр класса Student и выведите свойства.
class Student3 {
    name;
    age;
    setName(a) {
        this.name = a;
    }
    setAge(b) {
        this.age = b;
    }
    getName() {
        return this.name;
    }
    getAge() {
        return this.age;
    }
}
const student3 = new Student3();
student3.setName("Dima");
student3.setAge(20);
console.log(student3.getAge(), student3.getName());

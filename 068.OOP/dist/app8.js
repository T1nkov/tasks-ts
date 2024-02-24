// Создайте класс PasswordGenerator, который будет иметь метод generatePassword,
// позволяющий генерировать случайные безопасные пароли заданной длины.
// Метод generatePassword принимает в качестве параметра длину пароля.
// Использовать Generics
class PasswordGenerator {
    count;
    setCount(count) {
        typeof count == "number" ? (this.count = count) : false;
    }
    generatePassword() {
        let password = "";
        for (let i = 0; i < this.count; i++) {
            password += Math.round(Math.random() * 9);
        }
        return password;
    }
}
const passwordGenerator = new PasswordGenerator();
passwordGenerator.setCount(5);
console.log(passwordGenerator.generatePassword());

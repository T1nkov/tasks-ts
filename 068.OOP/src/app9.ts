// . Создать интерфейс iValidation. Создайте класс Validation с публичными методами
// isValidEmail, isValidDate, isValidPath, вызывающиеся через конструктор класса
// Validation. Конструктор принимает поля email, date, path и инициализирует их как
// поля класса. В каждом методе напишите соответствующую проверку

interface Validation {
  isValidEmail(): boolean;
  isValidDate(): boolean;
  isValidPath(): boolean;
  email: string;
  date: string;
  path: string;
}

class Validation implements Validation {
  email: string;
  date: string;
  path: string;
  constructor(email, date, path) {
    this.email = email;
    this.date = date;
    this.path = path;
  }

  isValidDate(): boolean {
    return /^(0[1-9]|1\d|2\d|3[01])\.(0[1-9]|1[0-2])\.\d{4}$/gm.test(this.date)
      ? true
      : false;
  }

  isValidEmail(): boolean {
    return /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/gm.test(this.email)
      ? true
      : false;
  }
  isValidPath(): boolean {
    return this.path.length >= 8 ? true : false;
  }
}

const validation = new Validation(
  "sdkfhaskdf322@gmail.com",
  "24.10.2004",
  "sdf234adfd"
);

console.log(
  validation.isValidDate(),
  validation.isValidEmail(),
  validation.isValidPath()
);

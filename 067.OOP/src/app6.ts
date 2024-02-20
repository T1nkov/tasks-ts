// 6. Создайте класс Calculator, который содержит методы add() (сложение), subtract()
// (вычитание), multiply() (умножение) и divide() (деление). Создайте экземпляр
// класса Calculator и выполните несколько операций.

class Calculator {
  num1: number;
  num2: number;
  setNums(a: number, b: number) {
    this.num1 = a;
    this.num2 = b;
  }

  add() {
    return this.num1 + this.num2;
  }
  substract() {
    return this.num1 - this.num2;
  }
  multiply() {
    return this.num1 * this.num2;
  }
  divide() {
    if (this.num2 == 0) return "Error";
    else {
      return this.num1 / this.num2;
    }
  }
}

const calculator = new Calculator();

calculator.setNums(1, 2);

console.log(calculator.add());

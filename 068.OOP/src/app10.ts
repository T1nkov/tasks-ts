// 0. Создать интерфейс iPwd. Создайте класс Pwd. Pwd хранит функцию showPwd,
// которая формирует и возвращает рандомно сгенерированный пароль из 8 чисел.
// Класс Validation является производным по отношению к базовому, родительскому
// Pwd и содержит функцию showPwd. Необходимо переопределить showPwd из
// базового класса и записать в переменную используя метод super. Далее
// дополняем переопределенный метод отображением результата в console.

interface iPwd {
  showPwd(): number;
}

class Pwd implements iPwd {
  showPwd(): number {
    let password: string = "";

    for (let i = 0; i < 9; i++) {
      password += Math.round(Math.random() * 9);
    }
    return Number(password);
  }
}

class Validation1 extends Pwd {
  showPwd(): number {
    const pass = super.showPwd();
    return pass;
  }
}

const validation1 = new Validation1();

console.log(validation1.showPwd());

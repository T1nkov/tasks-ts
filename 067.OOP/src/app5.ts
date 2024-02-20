// 5. Создайте класс Rectangle, который содержит свойства width (ширина) и height
// (высота), а также метод getArea(), который возвращает площадь прямоугольника
// (ширина * высота). Создайте экземпляр класса Rectangle и выведите его площадь.

class Rectangle1 {
  width: number;
  height: number;

  setWidth(a: number) {
    this.width = a;
  }
  setHeight(b: number) {
    this.height = b;
  }

  getArea() {
    return this.width * this.height;
  }
}

const rectangle = new Rectangle1();

rectangle.setHeight(20);
rectangle.setWidth(10);

console.log(rectangle.getArea());

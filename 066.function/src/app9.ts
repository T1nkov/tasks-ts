// 9. Напишите код, который сделает из массива объект
// [ {name: 'width', value: 10}, {name: 'height', value: 20} ] -> {width: 10, height: 20}

interface arr2 {
  name: string;
  value: number;
}

interface obj1 {
  width?: number;
  height?: number;
}

const arr34: arr2[] = [
  { name: "width", value: 10 },
  { name: "height", value: 20 },
];
const obj: obj1 = {};
function doObj(arr34: arr2[]): obj1 {
  arr34.forEach((el) => {
    obj[el.name] = el.value;
  });
  return obj;
}

const res = doObj(arr34);

console.log(res);

// 3. Реализуйте класс ServerPost. Обязательными функциями считаются функции
// middleware, controller, service, repository. Цепочка взаимодействия между
// методами следующая: middleware -> controller -> service -> repository, где:
// Задание:
// на вход подается JSON вида: `{ "email": "Test", "pwd": "test" }`
// Необходимо добавить в массив БД объект только в том случае, если нет
// совпадений по email.

interface json {
  email: string;
  pwd: string;
}

interface ServerPost {
  controller(json: json): json[];
  service(json: json): json[];
  repository(json: json): json[];
}

const json: json = { email: "Tsdfdsfest", pwd: "test" };

class ServerPost implements ServerPost {
  controller(json: json): json[] {
    return this.service(json);
  }
  service(json: json): json[] {
    return this.repository(json);
  }
  repository(json: json): json[] {
    const arr: json[] = [
      { email: "ner", pwd: "adf" },
      { email: "ad", pwd: "asd" },
      { email: "test", pwd: "asd" },
      { email: "Test", pwd: "test" },
      { email: "Tessdft", pwd: "test" }
    ];

    const res: json[] = arr.filter((el) => el.email == json.email);
    if (res.length != 0) throw new Error("Mail is busy");
    else {
      arr.push(json);
      return arr;
    }
  }
}

const serverPost = new ServerPost();

console.log(serverPost.controller(json));

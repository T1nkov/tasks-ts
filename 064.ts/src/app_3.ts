// Создайте переменную password и присвойте ей строковое значение. Если длина
// пароля больше 8 символов, выведите сообщение "Пароль надежный", иначе
// выведите сообщение "Пароль слишком короткий".

const password: string = prompt("pas");

if (password.length >= 8) {
  console.log("pass nadejnu");
} else {
  console.log("pass too small");
}

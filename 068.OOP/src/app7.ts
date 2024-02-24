// 7. Создайте класс StringManipulator, который будет иметь методы reverseString(str),
// isPalindrome(str), countVowels(str). Реализуйте функционал для разворота строки,
// проверки, является ли строка палиндромом, и подсчета гласных букв в строке.
// Использовать Generics

class StringManipulator {
  str: string;
  setString<Type>(str: Type) {
    if (typeof str == "string") this.str = str;
  }

  reverseString() {
    return this.str.split("").reverse().join("");
  }

  isPalindrome() {
    if (this.str == this.reverseString()) return "palindrome";
  }
  countVowels() {
    const vowels = ["a", "o", "u", "e", "i"];
    this.str;
  }
}

const stringManipulator = new StringManipulator();

stringManipulator.setString<string>("asfsdfsdfsdf");

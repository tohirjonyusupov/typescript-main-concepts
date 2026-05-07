// TypeScriptda ob'ekt turlari (object types) bizga murakkab ma'lumot tuzilmalarini ifodalash imkonini beradi. Ob'ekt turlari yordamida biz ma'lum bir shakldagi ob'ektlarni yaratishimiz mumkin, bu esa kodimizni yanada aniq va xavfsiz qiladi.

// Masalan, biz shaxsning nomi va yoshini ifodalovchi ob'ekt yaratmoqchimiz. Buning uchun biz interfeys (interface) yoki tur (type) yaratishimiz mumkin:

interface Person {
  name: string;
  age: number;
}

function greet(person: Person): string {
  return `Hello, ${person.name}! You are ${person.age} years old.`;
}

// Bu yerda Person interfeysi bizga shaxsning nomi va yoshini ifodalovchi ob'ektni yaratish imkonini beradi. greet funktsiyasi esa bu ob'ektni qabul qiladi va shaxsga salom beruvchi matnni qaytaradi.

let person1: Person = { name: "Alice", age: 30 };
console.log(greet(person1)); // Output: Hello, Alice! You are 30 years old.


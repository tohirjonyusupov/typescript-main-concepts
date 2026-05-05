// Interfeyslar interfeysni amalga oshiruvchi har qanday klassda kutilishi mumkin bo'lgan maydonlar va funksiyalar ro'yxatini belgilaydi.

// Aksincha, klass interfeysda ko'rsatilgan barcha maydon va funksiyalarga ega bo'lmaguncha interfeysni amalga oshira olmaydi.

// Interfeyslardan foydalanishning asosiy afzalligi shundaki, u turli xil obyektlardan polimorfik tarzda foydalanish imkonini beradi.
// Buning sababi, interfeysni amalga oshiruvchi har qanday klass hech bo'lmaganda shu maydonlar va funksiyalarga ega.

// Aytaylik, bizda interfeys bor:

interface IPerson {
  name: string;
  age: number;

  breath(): void;
}

// Va biz shaxsning xususiyatlariga ega bo'lgan aniqroq interfeys yaratmoqchimiz, buni
// extends kalit so'zidan foydalanib amalga oshirishimiz mumkin:

interface IManager extends IPerson {
  managerId: number;
  managePeople(people: IPerson[]): void;
}

// Bundan tashqari, bir nechta interfeyslarni kengaytirish mumkin.

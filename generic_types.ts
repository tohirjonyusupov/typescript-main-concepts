// Generic typelar sizga tur xavfsizligidan voz kechmasdan turli xil turlar bilan ishlaydigan kod yozish imkonini beradi. Ularni keyinchalik koddan foydalanganda ko'rsatadigan turlar uchun joy egallovchi sifatida tasavvur qiling. Umumiy turni yaratish uchun siz tur parametrlarini aniqlash uchun burchak qavslaridan <> foydalanasiz. Bu parametrlar siz ishlashni istagan aniq turni ifodalovchi o'zgaruvchilar sifatida ishlaydi, bu sizga turli xil ma'lumotlar turlariga moslashadigan qayta ishlatiladigan komponentlarni yozish imkonini beradi.

// Masalan, biz oddiy generic funktsiyani yaratishimiz mumkin:

function identity<T>(arg: T): T {
  return arg;
}

// Bu yerda T generic tur parametridir. Bu funktsiya har qanday turdagi argumentni qabul qiladi va shu turdagi qiymatni qaytaradi. Siz bu funktsiyani chaqirganingizda, TypeScript sizga aniq turini ko'rsatishingizni talab qiladi:

let output1 = identity<string>("Hello, World!");
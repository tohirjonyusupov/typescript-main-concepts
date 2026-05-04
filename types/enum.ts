Enumlar - bu TypeScriptning JavaScript tip darajasidagi kengaytmasi bo'lmagan bir nechta xususiyatlaridan biridir.

Enumlar ishlab chiquvchiga nomlangan konstantalar to'plamini aniqlash imkonini beradi. Enumlardan foydalanish niyatni hujjatlashtirishni yoki alohida holatlar to'plamini yaratishni osonlashtirishi mumkin. TypeScript ham raqamli, ham stringa asoslangan enumlarni taqdim etadi.

Raqamli enumlar:

Avval raqamli enumlardan boshlaymiz, agar siz boshqa tillardan kelgan bo'lsangiz, ular ko'proq tanish bo'lishi mumkin. Enumni enum kalit so'zi yordamida aniqlash mumkin.

enum Direction {
  Up = 1,
  Down,
  Left,
  Right,
}

String enumlar:

String enumlari raqamli enumlarga o'xshash, ammo ular qiymat sifatida stringlardan foydalanadi.

enum Direction {
  Up = "UP",
  Down = "DOWN",
  Left = "LEFT",
  Right = "RIGHT",
}
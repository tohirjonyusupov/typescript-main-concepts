// Partial
// Barcha xususiyatlarni ixtiyoriy qiladi. "Shuning uchun hech biri majburiy emas" deb ayta olasiz.
// Asosiy ishlash

interface User { ism: string; yosh: number; email: string; } type PartialUser = Partial<User>; // Teng: // { // ism?: string; // yosh?: number; // email?: string; // }

// Muammo - yangilash funksiyasi
// function yangilash(user: User) {Barcha xususiyat majburiy! // Lekin faqat email o'zgartirilsa?} yangilash({ ism: "Ali" }); // ✗ Xato! yosh kerak yangilash({ email: "new@ex.com" }); // ✗ Xato!

// Yechim - Partial
function yangilash(user: Partial<User>) {} 
yangilash({ ism: "Ali" }); // ✓ yangilash({ email: "new@ex.com" }); // ✓ yangilash({}); // ✓

// Real-world misoli
// React forma
interface FormData { ism: string; email: string; telefon: string; } // Foydalanuvchi ba'zi maydonlarni to'ldirgan const [formState, setFormState] = useState>({}); function handleChange(field: keyof FormData, value: string) { setFormState(prev => ({ ...prev, [field]: value })); }

// Yangilash funksiyasi
interface Product { id: number; nomi: string; narx: number; tavsif: string; } // Faqat qaysi kerak bo'lsa, o'shalarni yangilash async function updateProduct(id: number, data: Partial<Product>) { const response = await fetch(`/api/products/${id}`, { method: 'PATCH', body: JSON.stringify(data) }); return response.json(); } // Foydalanish updateProduct(1, { narx: 1000 }); // ✓ Faqat narx updateProduct(1, { nomi: "Yangi" }); // ✓ Faqat nomi 
// updateProduct(1, { nomi: "X", narx: 999 }); // ✓ Ko'pchiligi
// Partial koddagi takrorlanishni kamaytira. "Ushbu xususiyatlardan ba'zilari bo'lishi mumkin" deb ayta olasiz.
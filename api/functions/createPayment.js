export default async function handler(req, res) {
  // 1. Проверяем наличие ключа
  const apiKey = process.env.LAVA_API_KEY;
  
  try {
    const response = await fetch("https://gate.lava.top/api/v3/invoice", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Api-Key": apiKey
      },
      body: JSON.stringify({
        offerId: "c2bafffb-43f8-48a7-acce-1104ccf2ca17",
        email: "test@example.com",
        currency: "RUB",
        // ЗАМЕНИ на свой актуальный адрес Vercel
        returnUrl: "https://твой-проект.vercel.app/success" 
      })
    });

    const data = await response.json();

    // 2. Отправляем ответ в формате Vercel
    res.status(200).json(data);
    
  } catch (error) {
    res.status(500).json({ error: "Ошибка сервера", details: error.message });
  }
}

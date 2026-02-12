let database = []; // временное хранилище в памяти

export default function handler(req, res) {

  // POST — сохранить данные
  if (req.method === "POST") {
    const { phone, code, step, date } = req.body;

    if (!phone) {
      return res.status(400).json({ error: "Phone required" });
    }

    database.push({
      phone,
      code: code || null,
      step: step || "unknown",
      date: date || new Date().toISOString()
    });

    return res.status(200).json({ status: "saved" });
  }

  // GET — получить все данные
  if (req.method === "GET") {
    return res.status(200).json(database);
  }

  return res.status(405).json({ error: "Method not allowed" });
}

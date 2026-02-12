import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  if (req.method === 'POST') {
    const { phone, code } = req.body;
    const filePath = path.join(process.cwd(), 'data.json');

    let data = [];
    try { data = JSON.parse(fs.readFileSync(filePath, 'utf-8')); } 
    catch(e){}

    data.push({ phone, code, date: new Date().toISOString() });
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));

    return res.status(200).json({ message: 'ok' });
  }

  // GET для проверки данных
  if(req.method === 'GET'){
    try {
      const filePath = path.join(process.cwd(), 'data.json');
      const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
      return res.status(200).json(data);
    } catch(e){
      return res.status(200).json([]);
    }
  }

  res.status(405).json({ message: 'Method not allowed' });
}

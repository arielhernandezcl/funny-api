const express = require('express');
const fs = require('fs');
const app = express();
const PORT = 3000;
const CHISTES_FILE = './chistes.json';


app.use(express.json());

app.get('/chiste', (req, res) => {
  fs.readFile(CHISTES_FILE, (err, data) => {
    if (err) {
      console.error('Error:', err);
      res.status(500).send('Internal error');
      return;
    }

    const chistes = JSON.parse(data);
    const randomIndex = Math.floor(Math.random() * chistes.length);
    const randomChiste = chistes[randomIndex].chiste;
    res.json({ chiste: randomChiste });
  });
});

app.listen(PORT, () => {
  console.log(`Ready`);
});

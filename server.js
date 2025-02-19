const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
app.use(bodyParser.json());

app.post('/api/kaydet', (req, res) => {
    const yeniUye = req.body;

    const dosyaAdi = 'uyeler.json';
    let uyeler = [];
    if (fs.existsSync(dosyaAdi)) {
        const data = fs.readFileSync(dosyaAdi);
        uyeler = JSON.parse(data);
    }

    uyeler.push(yeniUye);
    fs.writeFileSync(dosyaAdi, JSON.stringify(uyeler, null, 2));

    res.status(200).send('Üye kaydedildi');
});

app.listen(3000, () => {
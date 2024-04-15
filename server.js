const express = require('express');
const app = express();
const PORT = 3000;

// Middleware para parsear o corpo das requisições POST
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.post('/submit-ages', (req, res) => {
  const ages = req.body.ages.split(',').map(age => parseInt(age.trim()));
  const numberOfAges = ages.length;
  const sumOfAges = ages.reduce((acc, curr) => acc + curr, 0);
  const maxAge = Math.max(...ages);

  res.send(`
    <p>Quantidade de idades digitadas: ${numberOfAges}</p>
    <p>Soma das idades: ${sumOfAges}</p>
    <p>Maior idade digitada: ${maxAge}</p>
    <a href="/">Voltar</a>
  `);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

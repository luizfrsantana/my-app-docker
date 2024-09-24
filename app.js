// Importa o Express e o caminho
const express = require('express');
const path = require('path');

// Cria a aplicação Express
const app = express();

// Configura o EJS como motor de templates
app.set('view engine', 'ejs');

// Define a pasta de arquivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Rota principal ("/")
app.get('/', (req, res) => {
  res.render('index', { title: 'Página Inicial', message: 'Bem-vindo ao Meu App!' });
});

// Rota para a página "Sobre" ("/about")
app.get('/about', (req, res) => {
  res.render('about', { title: 'Sobre Nós', message: 'Esta é a página sobre.' });
});

// Servidor ouvindo na porta 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});


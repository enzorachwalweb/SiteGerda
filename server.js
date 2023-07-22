const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;

// Define a pasta de publicação como "public"
app.use(express.static(path.join(__dirname, 'public')));

// Números iniciais na tabela
let numero1 = 100;
let numero2 = 200;
let numero3 = 150;
let numero4 = 120;
let numero5 = 80;
let numero6 = 50;
let numero7 = 250;

// Função para atualizar os números
const atualizarNumeros = () => {
  // Atualiza os números, diminuindo 1 unidade por dia
  numero1 -= 1;
  numero3 -= 1;
  numero4 -= 1;
  numero5 -= 1;
  numero7 -= 1;

  // Atualiza os dois números que diminuem 2 unidades por dia
  numero2 -= 2;
  numero6 -= 2;

  // Verifica se algum número chegou a 7 e o coloca no topo
  const numeros = [numero1, numero2, numero3, numero4, numero5, numero6, numero7];
  const numerosChegandoPertoDe7 = numeros.filter(numero => numero >= 7);
  const numeroMaisProximoDe7 = Math.min(...numerosChegandoPertoDe7);
  if (numeroMaisProximoDe7) {
    numeros.splice(numeros.indexOf(numeroMaisProximoDe7), 1);
    numeros.unshift(numeroMaisProximoDe7);
  }
};

// Middleware do cors para permitir solicitações de outros domínios
app.use(cors());

// Rota para obter os números atuais
app.get('/numeros', (req, res) => {
  res.json({
    numero1,
    numero2,
    numero3,
    numero4,
    numero5,
    numero6,
    numero7
  });
});

// Rota para atualizar os números
app.get('/atualizar-numeros', (req, res) => {
  atualizarNumeros();
  res.send('Números atualizados com sucesso!');
});

// Rota padrão
app.get('/', (req, res) => {
  res.send('Servidor está rodando!');
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});

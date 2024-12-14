const express = require('express');
const cors = require('cors');  // Importando o CORS
const app = express();

// Habilitando o CORS para aceitar requisições de qualquer origem
app.use(cors());

// Para que o Express possa ler o corpo das requisições em JSON
app.use(express.json());

// Endpoint para receber os dados do formulário
app.post('/api/formulario', (req, res) => {
    console.log('Dados recebidos:', req.body);  // Exibe os dados no console
    res.json({ message: 'Dados recebidos com sucesso!' });  // Envia uma resposta de sucesso
});

// Servir os arquivos estáticos do frontend
app.use(express.static('public'));  // Os arquivos estão na pasta "public" no backend

// Configurando o servidor para rodar na porta 3000
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor backend rodando na porta ${PORT}`);
});

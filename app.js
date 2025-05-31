const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

// Rotas
const contaRoutes = require('./src/routes/contaRoutes');
const transacaoRoutes = require('./src/routes/transacaoRoutes');
const ofertaRoutes = require('./src/routes/ofertaRoutes');
app.use('/conta', contaRoutes);
app.use('/transacoes', transacaoRoutes);
app.use('/ofertas', ofertaRoutes);

app.get('/', (req, res) => {
    res.send('Banco 360 API');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});

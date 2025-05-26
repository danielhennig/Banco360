const express = require('express');
const cors = require('cors');
const routes = require('./routes');
require('./database/database');

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api', routes);

app.get('/', (req, res) => {
  res.send('API Banco Open Finance rodando!');
});

module.exports = app;

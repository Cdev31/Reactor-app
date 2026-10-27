const express = require('express');
const cors = require('cors');
const ReactorRouter = require('./ReactorRouter');

const PORT = 2005;

const app = express();

app.use(cors());
app.use(express.json());

// Montado en /api para que coincida con el proxy de Vite del cliente
app.use('/api', ReactorRouter);

app.listen(PORT, () => {
    console.log('Servidor del reactor escuchando en http://localhost:2005');
});
const express = require('express'); // joga a pasta denntro da constante
const cors = require('cors'); // responsável pela conexão do backend com frontend
const server = express(); //inicia o sevidor

server. use(cors());
server.use(express.json()); // para a API entender que recebe e devolve informaç~oes em formato json

const TaskRoutes = require('./routes/TaskRoutes');
server.use('/task' , TaskRoutes);

server.listen(3333, () => {
    console.log('API ONLINE');
});
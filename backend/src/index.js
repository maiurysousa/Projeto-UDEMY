const express = require('express'); // joga a pasta denntro da constante
const server = express(); //inicia o sevidor
server.use(express.json()); // para a API entender que recebe e devolve informaç~oes em formato json

const TaskRoutes = require('./routes/TaskRoutes');
server.use('/task' , TaskRoutes);

server.listen(3000, () => {
    console.log('API ONLINE');
});
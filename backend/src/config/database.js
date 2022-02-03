const mongoose = require('mongoose'); //importação do mongoose

const url = 'mongodb://localhost:27017/todo'; //url de conexão com o mongodb
mongoose.connect(url, { useNewUrlParser: true }); //para ter compatibilidde conm outras versões do mongo

module.exports = mongoose;
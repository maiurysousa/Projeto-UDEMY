const mongoose = require('../config/database'); // vai devolver o mongoose já conectado
const Schema = mongoose.Schema; //representação de informações definidas a serem armazenadas no banco

const TaskSchema = new Schema({
    macaddress: {type: String, required: true},
    type: {type: Number, required: true},
    title: {type: String, required: true},
    description: {type: String, required: true},
    when: {type: Date, required: true},
    done: {type: Boolean, default: false},
    created: {type: Date, default: Date.now()}
});

module.exports = mongoose.model('Task', TaskSchema);
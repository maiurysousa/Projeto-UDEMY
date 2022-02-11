const TaskModel = require('../model/TaskModel');
const { isPast } = require('date-fns'); // verifica se a data está no passado
const { findOne } = require('../model/TaskModel');

const TaskValidation = async (req, res, next) => {

    const { macaddress, type, title, description, when } = req.body; // destruturação da requisição

    if (!macaddress)
        return res.status(400).json({ error: 'Macaddress é obrigatório!' })
    else if (!type)
        return res.status(400).json({ error: 'Type é obrigatório!' })
    else if (!title)
        return res.status(400).json({ error: 'Título é obrigatório!' })
    else if (!description)
        return res.status(400).json({ error: 'Descrição é obrigatória!' })
    else if (!when)
        return res.status(400).json({ error: 'Data e Hora são obrigatórios!' })

    else {
        let exists;

        if (req.params.id) {
            exists = await TaskModel.
                findOne(
                    {
                        '_id': { '$ne': req.params.id },
                        'when': { '$eq': new Date(when) },
                        'macaddress': { '$in': macaddress }
                    });
        } else {

            if (isPast(new Date(when)))
                return res.status(400).json({ error: 'Escolha uma data e hora futura.' });

            exists = await TaskModel.
                findOne(
                    {
                        'when': { '$eq': new Date(when) },
                        'macaddress': { '$in': macaddress }
                    });
        }

        if (exists) {
            return res.status(400).json({ error: 'Já existe uma tarefa cadastrada nesse dia e horário.' })
        }

        next();
    }
}

module.exports = TaskValidation;
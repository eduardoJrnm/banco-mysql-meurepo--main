const Tutoria = require ('../models/Tutoria');

//CREATE
exports.CreateTutoria = async (req, res) =>{
    try {
        const tutoria = await Tutoria.create(req.body);
        res.status(200).json(tutoria);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

//READ
exports.ListTutoria = async (req, res) =>{
    try{
        const tutoria = await Tutoria.findAll({
            atributes: ['cod_tutoria','dia_agendado', 'hora_agendada', 'aval_tutor', 'cod_curso'],
        });
        if(tutoria.length === 0){
            return res.status(404).json({message: 'Tutoria not exist'});
        }
        res.json(tutoria);
    } catch(error) {
        res.status(500).send(error.message)
    }
};

//UPDATE
exports.updateTutoria = async (req, res) => {
    try {
        const { id } = req.params;
        const [updated] = await Tutoria.update(req.body, {
            where: { id: id }
        });
        if (updated) {
            const updatedTutoria = await Tutoria.findOne({ where: { id: id } });
            res.status(200).json(updatedTutoria);
        } else {
            res.status(404).send('Tutoria not found');
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
};

//DELETE
exports.DeleteTutoria = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await Tutoria.destroy({
            where: { id: id }
        });
        if (deleted) {
            res.status(204).send();
        } else {
            res.status(404).send('Tutoria Curse not found');
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
};
const Pagamento = require ('../models/Pagamento');

//CREATE
exports.CreatePagamento = async (req, res) =>{
    try {
        const pagamento = await Pagamento.create(req.body);
        res.status(200).json(pagamento);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

//READ
exports.ListPagamento = async (req, res) =>{
    try{
        const tutoria = await Tutoria.findAll({
            atributes: ['cod_tutoria','dia_agendado', 'hora_agendada', 'aval_tutor', 'cod_curso']
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
exports.updatePagamento = async (req, res) => {
    try {
        const { id } = req.params;
        const [updated] = await Pagamento.update(req.body, {
            where: { id: id }
        });
        if (updated) {
            const updatedPagamento = await Pagamento.findOne({ where: { id: id } });
            res.status(200).json(updatedPagamento);
        } else {
            res.status(404).send('Pagamento not updated');
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
};  

//DELETE
exports.DeletePagamento = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await Pagamento.destroy({
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
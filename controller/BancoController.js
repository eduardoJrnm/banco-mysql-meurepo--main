const Banco = require('../models/Banco');

// CREATE
exports.CreateBanco = async (req, res) => {
    try {
        const { cod_banco, desc_banco } = req.body;
        if (!cod_banco || !desc_banco) {
            return res.status(400).json({ message: 'cod_banco and desc_banco are required' });
        }
        const banco = await Banco.create(req.body);
        res.status(201).json(banco);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

// READ
exports.ListBanco = async (req, res) => {
    try {
        const banco = await Banco.findAll({
            attributes: ['cod_banco', 'desc_banco'],
        });
        if (banco.length === 0) {
            return res.status(404).json({ message: 'No banks found' });
        }
        res.json(banco);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

//UPDATE
exports.updateBanco = async (req, res) => {
    try {
        const { id } = req.params;
        const [updated] = await Banco.update(req.body, {
            where: { id: id }
        });
        if (updated) {
            const updatedBanco = await Banco.findOne({ where: { id: id } });
            res.status(200).json(updatedBanco);
        } else {
            res.status(404).send('Banco not found');
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
};

//DELETE
exports.DeleteBanco = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await Banco.destroy({
            where: { id: id }
        });
        if (deleted) {
            res.status(204).send();
        } else {
            res.status(404).send('Banco not found');
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const AlunoCurso = require ('../models/AulunoCurso');


//CREATE
exports.CreateAlunoCurso = async (req, res) =>{
    try {
        const alunocurso = await AlunoCurso.create(req.body);
        res.status(200).json(alunocurso);
    } catch (error) {
        res.status(500).send(error.message);
    }
};


//READ
exports.ListAlunoCurso = async (req, res) =>{
    try{
        const alunocurso = await AlunoCurso.findAll({
            atributes: ['cod_aluno','cod_curso', 'progresso'],
        });
        if(alunocurso.length === 0){
            return res.status(404).json({message: 'Describle not exist'});
        }
        res.json(alunocurso);
    } catch(error) {
        res.status(500).send(error.message)
    }
};

//UPDATE
exports.updateAlunCurso = async (req, res) => {
    try {
        const { id } = req.params;
        const [updated] = await AlunoCurso.update(req.body, {
            where: { id: id }
        });
        if (updated) {
            const updatedAlunoCurso = await AlunoCurso.findOne({ where: { id: id } });
            res.status(200).json(updatedAlunoCurso);
        } else {
            res.status(404).send('Student Curse not found');
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
};

//DELETE
exports.DeleteAlunCurso = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await AlunoCurso.destroy({
            where: { id: id }
        });
        if (deleted) {
            res.status(204).send();
        } else {
            res.status(404).send('Student Curse not found');
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
};
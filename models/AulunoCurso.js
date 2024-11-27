const {DataTypes} = require ('sequelize');
const sequelize = require ('../config/config');

const AlunoCurso = sequelize.define('AlunoCurso', {
    cod_aluno:{
        type: DataTypes.INTEGER,
        allowNull:false,
        unique:true,
    },
    cod_curso:{
        type: DataTypes.INTEGER,
        allowNull:false,
        unique:true,
    },
    progresso: {
        type: DataTypes.INTEGER,
        defaultValue: 0, // Define um valor padrão
        validate: {
          min: 0, // Progresso mínimo é 0
          max: 100, // Progresso máximo é 100%
        },
      },
},{
    timestamps: false,
});

module.exports = AlunoCurso;
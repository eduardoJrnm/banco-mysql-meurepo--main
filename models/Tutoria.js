const { DataTypes } = require('sequelize');
const sequelize = require('../config/config');

const Tutoria = sequelize.define( 'Tutoria', {
    cod_tutoria: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true,
    },
    dia_agendado: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    hora_agendada: {
      type: DataTypes.TIME, 
      allowNull: false,
    },
    aval_tutor: {
      type: DataTypes.FLOAT,
    },
    cod_curso: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }, {
    timestamps: true,
  }
);

module.exports = Tutoria;

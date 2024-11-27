const { DataTypes } = require('sequelize');
const sequelize = require('../config/config');

const Pagamento = sequelize.define( 'Pagamento', {
    cod_pagamento: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true,
    },
    data_pagamento: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    hora_pagamento: {
      type: DataTypes.TIME, 
      allowNull: false,
    },
    valor: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
  }, {
    timestamps: true,
  }
);

module.exports = Pagamento;

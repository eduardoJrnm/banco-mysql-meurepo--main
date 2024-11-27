const { DataTypes } = require('sequelize');
const sequelize = require('../config/config');

const User = sequelize.define('User', {
    nome_social: {
        type: DataTypes.STRING,
        allowNull:false,
    },
   CPF:{
        type: DataTypes.BIGINT(11),
        allowNull:false,
        unique: true,
    },
    email:{
        type: DataTypes.STRING,
        allowNull:false,
        unique: true,
    },
    password:{
        type: DataTypes.STRING,
        allowNull:false,
    },
    active: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
    },
},{
    timestamps: false,
});

module.exports = User;
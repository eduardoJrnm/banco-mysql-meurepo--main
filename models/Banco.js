const {DataTypes} = require ('sequelize');
const sequelize = require ('../config/config');

const Banco = sequelize.define('Banco', {
    cod_banco:{
        type: DataTypes.INTEGER,
        allowNull:false,
        unique:true,
    },
    desc_banco:{
        type: DataTypes.STRING,
        allowNull:false,
        unique:true,
    },
},{
    timestamps: false,
});

module.exports = Banco;
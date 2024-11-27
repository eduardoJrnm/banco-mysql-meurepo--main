const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

exports.register = async (req, res) => {
    try {
        const {nome_social, CPF, email, password} = req.body;
        const existingUser = await User.findOne({where: {email}});

        if (existingUser) {
            return res.status(200).json({message: 'login alredy exists'});
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await User.create({nome_social, CPF, email, password: hashedPassword, active: true});
        res.status(201).json({message: 'User created is sucessfull', user});
        //return res.status(200).json({message: 'OK register'});
    } catch (error) {
        res.status(500).send(error.message);
    }
};

exports.login = async(req, res) => {
    try {
        const {email, password} = req.body;
        const user = await User.findOne({where: {email, active: true}});

        if (user && await bcrypt.compare(password, user.password)){
            const token = jwt.sign(
                {id: user.id, nome_social: user.nome_social, email: user.email},
                process.env.ACCES_TOKEN_SECRET,
                { expiresIn: '1h'}
            );
            res.json({token});

        } else {
            return res.status(401).send({message: 'Invalid credentials od inactive user'});
        }

    } catch (error) {
        res.status(500).send(error.message);
    }
};
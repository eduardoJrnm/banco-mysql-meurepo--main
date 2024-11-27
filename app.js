const express = require('express');
const app = express();
const sequelize = require('./config/config');
const userRoutes = require ('./routes/userRoutes');
const AlunoCursoRoutes = require('./routes/AlunoCursoRoutes')
const TutoriaRoutes = require ('./routes/TutoriaRoutes');
const PagamentoRoutes = require ('./routes/PagamentoRoutes');
const BancoRoutes = require ('./routes/BancoRoutes');
const authRoutes = require('./routes/authRoutes');
const setupSwagger = require('./swagger/swagger');

app.use (express.json());
setupSwagger(app);

app.use('/api', userRoutes);
app.use('/api', AlunoCursoRoutes);
app.use('/api', authRoutes);
app.use('/api', TutoriaRoutes);
app.use('/api', PagamentoRoutes);
app.use('/api', BancoRoutes);


sequelize.sync()
    .then(
    ()=>{
        console.log('Database conneted and synced')
    })
    .catch(
        (error)=>{
            console.error('Unable to connect to the database', error);
        }
    );

module.exports = app;

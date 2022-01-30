require('dotenv').config();
const bdd = require('../model');

console.log('Syncronisation de la BDD');
bdd.sequelize.sync({ alter: true });

var Credentials = require('../credentials.js');
const Sequelize = require('sequelize');
//                                  db           user       pw             options
const connection = new Sequelize('fecwestelms', 'admin', Credentials.mypw, {
    host : Credentials.host,
    port: '3306',
    dialect : 'mysql'
});

connection
    .authenticate()
    .then( () => console.log(`Connected to MYSQL DATABSE`))
    .catch( (err) => console.error('Not connected to the database', err));

module.exports = connection;
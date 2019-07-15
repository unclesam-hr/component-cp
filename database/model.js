const connection = require('./index.js');
const Sequelize = require('sequelize');


const Chairs = connection.define('chairs', {
	name: {
		type: Sequelize.STRING,
		required: true,
	},
	category: {
		type: Sequelize.STRING,
		required: true
	},
	url: {
		type: Sequelize.STRING,
		required: true
	},
	max_price: {
		type: Sequelize.INTEGER,
		required: true,
		allowNull: true
	},
	min_price: {
		type: Sequelize.INTEGER,
		required: true,
		allowNull: true
	}

}, {
	timestamps: false
});

// Synchronize database
Chairs
	.sync({ force: false })
	.then(() => console.log('Able to connect to Chairs Table'))
	.catch(err => console.error('Unable to connect to Chairs Table', err));


module.exports = {
	Chairs
};
const express = require('express');
const path = require('path');
const app = express();
const morgan = require('morgan');
const parser = require('body-parser');
const connection = require('../database');
const db = require('../database/dbHelpers');
const port = 3002;
const cors = require('cors')

app.use(parser.json());
app.use(parser.urlencoded({extended: true}));
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, '../client/dist')));


// app.options('/products-cp', cors());
app.get('/products-cp/', cors(), (req, res) => { // grab list of chairs
	db.getChairs()
		.then((records) => {
			res.status(200).send(JSON.stringify(records)); 
		})
		.catch( (err) => {
			console.error(err);
			res.status(404).send('Error retrieving data.');
		});
})


app.get('/products-cp/:id', cors(),(req, res) => { // grab chair by ID
	var { id } = req.params;
	console.log(`/products-cp/${id}`, JSON.stringify(id));
	db.getChairByCollectionID(id)
		.then((data) => {
			var record = JSON.stringify(data);
			res.status(200).send(record);
		})
	.catch( (err) => {
		console.error(err);
		res.status(404).send('Error retrieving data.');
	});
})

app.listen(port, () => console.log(`Listening to port ${port}`))
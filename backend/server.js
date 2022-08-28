const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const { readdirSync } = require('fs');
const dotenv = require('dotenv');
dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

//require and use the routes in the routes folder
readdirSync('./routes').map((file) => {
	app.use(require(`./routes/${file}`));
});

//database connection
mongoose
	.connect(process.env.DATABASE_URL, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => {
		console.log('connected to database');
	})
	.catch((err) => {
		console.log(err);
	});

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
	console.log(`Server started on port ${PORT}`);
});

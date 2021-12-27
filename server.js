const express = require('express');
const connectDb = require('./config/connectDb');
const PeopleRoute = require('./routes/People');
const app = express();

require('dotenv').config();
connectDb();
app.use(express.json());
app.use('/api/peoples', PeopleRoute);

app.listen(process.env.port, () =>
	console.log(`server is running on port ${process.env.port}`)
);

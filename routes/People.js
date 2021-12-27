const express = require('express');
const {
	AddPerson,
	GetPeople,
	GetPerson,
	DeletePerson,
	UpdatePerson,
} = require('../controllers/People.js');
const PeopleSchema = require('../models/People');
const PeopleRoute = express.Router();

// method post
// req.body
// /addPerson

PeopleRoute.post('/addPerson', AddPerson);

// method get
// url/
PeopleRoute.get('/', GetPeople);

// method get
// req.params
// /:id
PeopleRoute.get('/:id', GetPerson);

// method delete
// req.params
// /deletePerson/:id
PeopleRoute.delete('/deletePerson/:id', DeletePerson);

//method put
// req.params
// req.body
// /updatePerson/:id
PeopleRoute.put('/updatePerson/:id', UpdatePerson);

module.exports = PeopleRoute;

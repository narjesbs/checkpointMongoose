const PeopleSchema = require('../models/People');

exports.AddPerson = async (req, res) => {
	const { email } = req.body;
	try {
		const newPerson = new PeopleSchema(req.body);
		const found = await PeopleSchema.findOne({ email });
		if (found) {
			return res.status(400).send('Person already exist!');
		}
		await newPerson.save();
		res.status(200).send({ msg: 'the person is added', newPerson });
	} catch (error) {
		res.status(500).send({ msg: 'could not add the person', error });
	}
};

exports.GetPeople = async (req, res) => {
	try {
		const PeopleCollection = await PeopleSchema.find();
		res.status(200).send({ msg: 'list of people', PeopleCollection });
	} catch (error) {
		res.status(500).send({ msg: 'could not get list of people' });
	}
};

exports.GetPerson = async (req, res) => {
	const { id } = req.params;
	try {
		const foundPerson = await PeopleSchema.findById(id);
		res.status(200).send({ msg: 'person is found', foundPerson });
	} catch (error) {
		res.status(500).send('could not get person');
	}
};

exports.DeletePerson = async (req, res) => {
	const { id } = req.params;
	try {
		const deleted = await PeopleSchema.findByIdAndDelete(id);
		res.status(200).send({ msg: 'person is deleted', deleted });
	} catch (error) {
		res.status(500).send('could not delete person');
	}
};

exports.UpdatePerson = async (req, res) => {
	const { id } = req.params;
	try {
		const updated = await PeopleSchema.findByIdAndUpdate(id, {
			$set: { ...req.body },
		});
		res.status(200).send({ msg: 'person is updated', updated });
	} catch (error) {
		res.status(500).send('could not update person');
	}
};

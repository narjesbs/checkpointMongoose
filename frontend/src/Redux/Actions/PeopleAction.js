import axios from 'axios';
import {
	GET_PEOPLE,
	GET_PERSON,
	TOGGLE_FALSE,
	TOGGLE_TRUE,
} from '../Types/PeopleType';

export const getPeople = () => async (dispatch) => {
	try {
		//talking to Back
		const res = await axios.get('/api/peoples');
		//talking to Reducer
		dispatch({
			type: GET_PEOPLE,
			payload: res.data,
		});
		console.log(res.data);
	} catch (error) {
		console.log(error);
	}
};

export const addPerson = (newPerson, navigate) => async (dispatch) => {
	try {
		const res = await axios.post('/api/peoples', newPerson);
		dispatch(getPeople());
		navigate('/peoples');
	} catch (error) {
		console.log(error);
	}
};

export const deletePerson = (id) => async (dispatch) => {
	try {
		const res = await axios.delete(`/api/peoples/${id}`);
		dispatch(getPeople());
	} catch (error) {
		console.log(error);
	}
};

export const getPerson = (id) => async (dispatch) => {
	try {
		const res = await axios.get(`/api/peoples/${id}`);
		dispatch({
			type: GET_PERSON,
			payload: res.data,
		});
		console.log(res.data);
	} catch (error) {
		console.log(error);
	}
};

export const toggletrue = () => {
	return {
		type: TOGGLE_TRUE,
	};
};

export const togglefalse = () => {
	return {
		type: TOGGLE_FALSE,
	};
};

export const editPerson = (id, updatedPerson, navigate) => async (dispatch) => {
	try {
		const res = await axios.put(`/api/peoples/${id}`, updatedPerson);
		dispatch(getPeople());
		navigate('/peoples');
	} catch (error) {
		console.log(error);
	}
};

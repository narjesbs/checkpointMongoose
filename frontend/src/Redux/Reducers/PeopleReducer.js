import {
	GET_PEOPLE,
	GET_PERSON,
	TOGGLE_FALSE,
	TOGGLE_TRUE,
} from '../Types/PeopleType';

const initialState = {
	People: [],
	Person: {},
	edit: false,
};
const PeopleReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_PEOPLE:
			return {
				...state,
				People: action.payload.PeopleCollection,
			};
		case GET_PERSON:
			return {
				...state,
				Person: action.payload.PeopleCollection,
			};
		case TOGGLE_TRUE:
			return {
				...state,
				edit: true,
			};
		case TOGGLE_FALSE:
			return {
				...state,
				edit: false,
			};
		default:
			return state;
	}
};
export default PeopleReducer;

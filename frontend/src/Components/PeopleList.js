import React from 'react';
import PersonCard from './PersonCard';
import { useSelector } from 'react-redux';
function PeopleList() {
	const people = useSelector((state) => state.PeopleReducer.people);
	return (
		<div>
			{people.map((person) => (
				<PersonCard person={person} key={person._id} />
			))}
		</div>
	);
}

export default PeopleList;

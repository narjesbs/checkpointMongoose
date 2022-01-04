import React from 'react';
import PersonCard from './PersonCard';
import { useSelector } from 'react-redux';
function PeopleList() {
	const peoples = useSelector((state) => state.PeopleReducer.People);
	return (
		<div>
			{peoples.map((person) => (
				<PersonCard person={person} key={person._id} />
			))}
		</div>
	);
}

export default PeopleList;

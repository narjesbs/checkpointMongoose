import React from 'react';
import { useSelector } from 'react-redux';
import { Card } from 'react-bootstrap';

function PersonDetails() {
	const person = useSelector((state) => state.PeopleReducer.Person);

	return (
		<Card>
			<Card.Body>
				<Card.Title>{person.name}</Card.Title>
				<Card.Title>{person.age}</Card.Title>
				<Card.Title>{person.email}</Card.Title>
				<Card.Text>{person.favouriteFood}</Card.Text>
			</Card.Body>
		</Card> 
	);
}

export default PersonDetails;

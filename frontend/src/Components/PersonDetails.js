import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Card } from 'react-bootstrap';
import { useState } from 'react';
import Spin from './Spinner';
function PersonDetails() {
	const person = useSelector((state) => state.PeopleReducer.Person);
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		if (person) {
			setLoading(false);
		} else {
			console.log('error');
		}
	}, []);
	return (
		<main>
			{loading ? (
				<Spin />
			) : (
				<Card className='peopleCont'>
					<Card.Body className='person-info'>
						<Card.Title>
							<h5>Their Name:</h5>
							{person.name}
						</Card.Title>
						<Card.Title>
							<h5>Their Age:</h5>
							{person.age}
						</Card.Title>
						<Card.Title>
							<h5>Their Email:</h5>
							{person.email}
						</Card.Title>
						<Card.Title>
							<h5>Their Favourite Food:</h5>
							{person.favouriteFood}
						</Card.Title>
					</Card.Body>
				</Card>
			)}
		</main>
	);
}

export default PersonDetails;

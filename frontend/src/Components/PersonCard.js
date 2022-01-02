import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import {
	deletePerson,
	getPerson,
	toggletrue,
} from '../Redux/Actions/PeopleAction';

function PersonCard({ person }) {
	const dispatch = useDispatch();
	return (
		<Card style={{ width: '18rem' }}>
			<Card.Body>
				<Card.Title>{person.name}</Card.Title>
				<Card.Title>{person.email}</Card.Title>
				<Button
					variant='primary'
					onClick={() => dispatch(deletePerson(person._id))}
				>
					Delete
				</Button>
				<Link to={`/edit/${person._id}`}>
					<Button
						variant='primary'
						onClick={() => {
							dispatch(toggletrue());
							dispatch(getPerson(person._id));
						}}
					>
						Edit
					</Button>
				</Link>
				<Link to={`/peoples/${person._id}`}>
					<Button
						variant='primary'
						onClick={() => dispatch(getPerson(person._id))}
					>
						Details
					</Button>
				</Link>
			</Card.Body>
		</Card>
	);
}

export default PersonCard;

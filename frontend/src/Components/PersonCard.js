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
		<Card className='person'>
			<Card.Body className='person-info'>
				<Card.Title>{person.name}</Card.Title>
				<Card.Title>{person.email}</Card.Title>
				<div className='btns'>
					<Button
						className='btn'
						onClick={() => dispatch(deletePerson(person._id))}
					>
						Delete
					</Button>
					<Link style={{ textDecoration: 'none' }} to={`/edit/${person._id}`}>
						<Button
							className='btn'
							onClick={() => {
								dispatch(toggletrue());
								dispatch(getPerson(person._id));
							}}
						>
							Edit
						</Button>
					</Link>
					<Link style={{ textDecoration: 'none' }} to={`/people/${person._id}`}>
						<Button
							className='btn'
							onClick={() => dispatch(getPerson(person._id))}
						>
							Details
						</Button>
					</Link>
				</div>
			</Card.Body>
		</Card>
	);
}

export default PersonCard;

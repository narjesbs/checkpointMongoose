import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addPerson, editPerson } from '../Redux/Actions/PeopleAction';
function AddPerson() {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [age, setAge] = useState(0);
	const [favouriteFood, setFavouriteFood] = useState('');

	const dispatch = useDispatch();
	const navigate = useNavigate();

	const person = useSelector((state) => state.PeopleReducer.Person);
	const edit = useSelector((state) => state.PeopleReducer.edit);

	useEffect(() => {
		if (edit) {
			setName(person.name);
			setEmail(person.email);
			setAge(person.age);
			setFavouriteFood(person.favouriteFood);
		} else {
			setName('');
			setEmail('');
			setAge(0);
			setFavouriteFood('');
		}
	}, []);

	return (
		<main>
			<Form className='peopleCont'>
				<Form.Group className='mb-3' controlId='formBasicName'>
					<Form.Label>Their Name</Form.Label>
					<Form.Control
						onChange={(e) => setName(e.target.value)}
						value={name}
						type='text'
						placeholder='Enter Their name'
					/>
				</Form.Group>
				<Form.Group className='mb-3' controlId='formBasicEmail'>
					<Form.Label>Their Email address</Form.Label>
					<Form.Control
						onChange={(e) => setEmail(e.target.value)}
						value={email}
						type='email'
						placeholder='Enter Their email'
					/>
				</Form.Group>
				<Form.Group className='mb-3' controlId='formBasicAge'>
					<Form.Label>The Age</Form.Label>
					<Form.Control
						onChange={(e) => setAge(e.target.value)}
						value={age}
						type='number'
						placeholder='Enter Their age'
					/>
				</Form.Group>
				<Form.Group className='mb-3' controlId='formBasicFF'>
					<Form.Label>Their Favourite Food</Form.Label>
					<Form.Control
						onChange={(e) => setFavouriteFood(e.target.value)}
						value={favouriteFood}
						type='text'
						placeholder='Enter Their Favourite Food'
					/>
				</Form.Group>
				{edit ? (
					<Button
						className='btn'
						type='submit'
						onClick={(e) => {
							e.preventDefault();
							dispatch(
								editPerson(
									person._id,
									{ name, email, age, favouriteFood },
									navigate
								)
							);
						}}
					>
						Edit Person
					</Button>
				) : (
					<Button
						className='btn'
						type='submit'
						onClick={(e) => {
							e.preventDefault();
							dispatch(
								addPerson({ name, email, age, favouriteFood }, navigate)
							);
						}}
					>
						Add Person
					</Button>
				)}
			</Form>
		</main>
	);
}

export default AddPerson;

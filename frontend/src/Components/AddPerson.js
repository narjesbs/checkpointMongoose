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
	const person = useSelector((state) => state.PeopleReducer.person);
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
		<Form>
			<Form.Group className='mb-3' controlId='formBasicName'>
				<Form.Label>your Name</Form.Label>
				<Form.Control
					onChange={(e) => setName(e.target.value)}
					value={name}
					type='text'
					placeholder='Enter your name'
				/>
			</Form.Group>
			<Form.Group className='mb-3' controlId='formBasicEmail'>
				<Form.Label>your Email address</Form.Label>
				<Form.Control
					onChange={(e) => setEmail(e.target.value)}
					value={email}
					type='email'
					placeholder='Enter your email'
				/>
			</Form.Group>
			<Form.Group className='mb-3' controlId='formBasicAge'>
				<Form.Label>your Age</Form.Label>
				<Form.Control
					onChange={(e) => setAge(e.target.value)}
					value={age}
					type='number'
					placeholder='Enter your age'
				/>
			</Form.Group>
			<Form.Group className='mb-3' controlId='formBasicFF'>
				<Form.Label>Your Favourite Food</Form.Label>
				<Form.Control
					onChange={(e) => setFavouriteFood(e.target.value)}
					value={favouriteFood}
					type='text'
					placeholder='Enter your Favourite Food'
				/>
			</Form.Group>
			{edit ? (
				<Button
					variant='primary'
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
					variant='primary'
					type='submit'
					onClick={(e) => {
						e.preventDefault();
						dispatch(addPerson({ name, email, age, favouriteFood }, navigate));
					}}
				>
					Add Person
				</Button>
			)}
		</Form>
	);
}

export default AddPerson;

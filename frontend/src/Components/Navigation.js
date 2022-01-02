import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { getPeople, togglefalse } from '../Redux/Actions/PeopleAction';
import { Link } from 'react-router-dom';
function Navigation() {
	const dispatch = useDispatch();
	return (
		<Navbar bg='light' expand='lg'>
			<Container>
				<Navbar.Brand href='#home'> Contact List</Navbar.Brand>
				<Navbar.Toggle aria-controls='basic-navbar-nav' />
				<Navbar.Collapse id='basic-navbar-nav'>
					<Nav className='me-auto'>
						<Nav.Link href='#home'>Home</Nav.Link>
						<Nav.Link
							as={Link}
							to='/People'
							onClick={() => dispatch(getPeople())}
						>
							People
						</Nav.Link>
						<Nav.Link
							as={Link}
							to='/AddPerson'
							onClick={() => dispatch(togglefalse())}
						>
							Add
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}

export default Navigation;

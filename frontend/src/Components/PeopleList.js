import React, { useEffect } from 'react';
import PersonCard from './PersonCard';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import Spin from './Spinner';
function PeopleList() {
	const people = useSelector((state) => state.PeopleReducer.People);
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		if (people) {
			setLoading(false);
		} else {
			console.log('error');
		}
	}, []);
	return (
		<main>
			<section className='peopleCont'>
				<h3> You have {people.length} Friends</h3>
				{loading ? (
					<Spin />
				) : (
					people.map((person) => (
						<PersonCard person={person} key={person._id} />
					))
				)}
			</section>
		</main>
	);
}

export default PeopleList;

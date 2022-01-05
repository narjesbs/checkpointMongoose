import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddPerson from './Components/AddPerson';
import Home from './Components/Home';
import Navigation from './Components/Navigation';
import PeopleList from './Components/PeopleList';
import PersonDetails from './Components/PersonDetails';

function App() {
	return (
		<div className='App'>
			<Navigation />
			<Routes>
				<Route path='/' element={<Home></Home>}></Route>
				<Route path='/People' element={<PeopleList></PeopleList>}></Route>
				<Route path='/AddPerson' element={<AddPerson></AddPerson>}></Route>
				<Route
					path='/People/:id'
					element={<PersonDetails></PersonDetails>}
				></Route>
				<Route path='/Edit/:id' element={<AddPerson></AddPerson>}></Route>
			</Routes>
		</div>
	);
}

export default App;

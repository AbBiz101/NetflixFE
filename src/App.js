import './App.css';
import Home from './views/Home';
import { useState } from 'react';
import UserLogin from './views/UserLogin';
import MyFooter from './components/MyFooter';
import MyNavbar from './components/MyNavbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import MovieDetails from './views/MovieDetails';
import BackOffice from '../src/components/BackOffice';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const App = () => {
	const [query, setQuery] = useState('');

	return (
		<div>
			<Router>
				<MyNavbar query={query} setQuery={setQuery} />
				<Route
					path="/"
					exact
					render={(routerProps) => (
						<Home {...routerProps} query={query} setQuery={setQuery} />
					)}
				/>
				<Route path="/details/:id" exact component={MovieDetails} />
				<Route path="/login" exact component={UserLogin} />
				<Route path="/backOffice" exact component={BackOffice} />
				<MyFooter />
			</Router>
		</div>
	);
};

export default App;

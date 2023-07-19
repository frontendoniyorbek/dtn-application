import './App.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { Main, Login, Register, Navbar } from './components';

function App() {
	return (
		<div>
			<BrowserRouter>
				<Navbar />
				<Routes>
					<Route path='/' element={<Main />} />
					<Route path='/login' element={<Login />} />
					<Route path='/register' element={<Register />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;

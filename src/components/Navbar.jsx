import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
	return (
		<div className='d-flex flex-wrap justify-content-between py-3 mb-4 border-bottom container'>
			<Link to={'/'}>
				<img src='./vite.svg' alt='' />
			</Link>
			<nav className='d-inline-flex mt-2 mt-md-0 ms-md-auto'>
				<Link className='me-3 py-2 text-dark text-decoration-none' to={'/login'}>
					Login
				</Link>
				<Link className='me-3 py-2 text-dark text-decoration-none' to={'/register'}>
					Register
				</Link>
				<Link className='me-3 py-2 text-dark text-decoration-none' to={'/login'}>
					Login
				</Link>
			</nav>
		</div>
	);
};

export default Navbar;

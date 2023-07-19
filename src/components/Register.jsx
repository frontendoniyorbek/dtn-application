import { useState } from 'react';
import { icon } from '../constants';
import { Input } from '../ui';
import { useDispatch, useSelector } from 'react-redux';
import { registerUserStart } from '../slice/auth';

const Register = () => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const dispatch = useDispatch();
	const { isLoading } = useSelector(state => state.auth);

	const loginHandler = e => {
		e.preventDefault();
		dispatch(registerUserStart());
	};

	return (
		<div className='text-center mt-5'>
			<main class='form-signin w-25 m-auto'>
				<form>
					<img class='mb-2' src={icon} alt='' width='72' height='60' />
					<h1 class='h3 mb-3 fw-normal'>Please login</h1>

					<Input label={'User'} state={name} setState={setName} />
					<Input label={'Email address'} state={email} setState={setEmail} />
					<Input label={'Password'} type={'password'} state={password} setState={setPassword} />

					<button class='w-100 btn btn-lg btn-primary mt-2' disabled={isLoading} type='submit' onClick={loginHandler}>
						{isLoading ? 'loading...' : 'Register'}
					</button>
				</form>
			</main>
		</div>
	);
};

export default Register;

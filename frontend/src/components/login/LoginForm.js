import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import LoginInput from '../../components/inputs/login-input';
const loginInfos = {
	email: '',
	password: '',
};

export default function LoginForm() {
	const [login, setLogin] = useState(loginInfos);
	const { email, password } = login;
	const handleLoginChange = (e) => {
		const { name, value } = e.target;
		setLogin({
			...login,
			[name]: value,
		});
	};
	const loginValidation = Yup.object({
		email: Yup.string()
			.required('Email is required')
			.email('Email is invalid')
			.max(50, 'Email is too long'),
		password: Yup.string()
			.required('Password is required')
			.max(26, 'Password is too long'),
	});

	return (
		<div className='login'>
			<div className='login_wrapper'>
				<div className='login_wrap'>
					<div className='login_1'>
						<div className='title_container'>
							<img src='../../icons/facebook.svg' alt='' />

							<span className='clone_subtext'>Clone</span>
							<span className='by_subtext'>by Bradon Siegle</span>
						</div>

						<span>
							Connect with friends and the world around you on Facebook.
						</span>
					</div>
					<div className='login_2'>
						<div className='login_2_wrap'>
							<Formik
								enableReinitialize
								initialValues={{
									email,
									password,
								}}
								validationSchema={loginValidation}
							>
								{(formik) => (
									<Form>
										<LoginInput
											type='text'
											name='email'
											placeholder='Email or phone number'
											onChange={handleLoginChange}
										/>
										<LoginInput
											type='password'
											name='password'
											placeholder='Password'
											onChange={handleLoginChange}
											bottom
										/>
										<button type='submit' className='blue_btn'>
											Log In
										</button>
									</Form>
								)}
							</Formik>

							<Link to='/forgot' className='forgot_password'>
								Forgotten password ?
							</Link>
							<div className='sign_splitter'></div>
							<button className='blue_btn open_signup'>Create Account</button>
						</div>
						<Link to='/' className='sign_extra'>
							<b>Create a Page </b>
							for a celebrity, brand or business.
						</Link>
					</div>
				</div>
				<div className='register'></div>
			</div>
		</div>
	);
}

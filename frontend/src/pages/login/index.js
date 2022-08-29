import './login.scss';
import { Formik, Form } from 'formik';

export default function Login() {
	return (
		<div className='login'>
			<div className='login__wrapper'>
				<div className='login__wrap'>
					<div className='login__1'>
						<img src='../../icons/facebook.svg' alt='' />
						<span>
							Facebook Clone helps you connect and share with the people in your
							life.
						</span>
					</div>
					<div className='login__2'>
						<div className='login__2__wrap'>
							<Formik>
								{(formik) => (
									<Form>
										<input type='text' />
										<input type='text' />
										<button type='submit'>Log In</button>
									</Form>
								)}
							</Formik>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

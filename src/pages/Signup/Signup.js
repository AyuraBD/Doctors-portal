import React , { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';

const Signup = () => {
	const { register, handleSubmit, formState: { errors } } = useForm();
	const { createUser, updateUser} = useContext(AuthContext);
	const [signUpError, setSignUpError] = useState('');
	const navigate = useNavigate();
	const handleSignUp = data => {
		
		setSignUpError('');
		createUser(data.email, data.password)
		.then(result =>{
			const user = result.user;
			console.log(user);
			toast('User created successfully');
			const userInfo = {
				displayName: data.name
			}
			updateUser(userInfo)
			.then(() =>{
				navigate('/');
			})
			.catch(err => {
				console.error(err)
				setSignUpError(err.message)
			})
		})
		.catch(err => console.error(err))
	}
	return (
		<div className='py-16 flex justify-center items-center'>
			<div>
				<h2 className='text-3xl text-center font-semibold'>Sign Up</h2>
				<form onSubmit={handleSubmit(handleSignUp)}>
					<div className="form-control w-full max-w-xs">
						<label className="label">
							<span className="label-text">Name</span>
						</label>
						<input type='text' {...register('name', {required: 'Name is required'})} className="input input-bordered w-full max-w-xs" />
						{errors.name && <p className='text-warning'>{errors.name.message}</p>}
					</div>
					<div className="form-control w-full max-w-xs">
						<label className="label">
							<span className="label-text">Email</span>
						</label>
						<input type='email' {...register('email', {required: "Email is required"})} className="input input-bordered w-full max-w-xs" />
						{errors.email && <p className='text-warning'>{errors.email.message}</p>}
					</div>
					<div className="form-control w-full max-w-xs mb-4">
						<label className="label">
							<span className="label-text">Password</span>
						</label>
						<input type='password' {...register('password',
						)} className="input input-bordered w-full max-w-xs" />
					{
						signUpError && <p className='text-warning'>{signUpError}</p>
					}
					{errors.password && <p className='text-warning'>{errors.password.message}</p>}
					</div>
					<input className='btn btn-accent text-white w-full' value='Sign up' type="submit" />
				</form>
				<p className='mt-2'>Already have an account? <Link to='/login' className='text-secondary'>Login</Link></p>
			</div>
		</div>
	);
};

export default Signup;
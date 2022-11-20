import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { signIn} = useContext(AuthContext);
    const [logInError, setLogInError] = useState('');
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';

    const handleLogin = data =>{
        console.log(data);
        signIn(data.email, data.password)
        .then(result => {
            const user = result.user;
            console.log(user);
            navigate(from, {replace: true});
        })
        .catch(err => {
            console.error(err.message);
            setLogInError(err.message);
        })
    }
    return (
        <div className='py-16 flex justify-center items-center'>
            <div>
                <h2 className='text-3xl text-center font-semibold'>Login</h2>
                <form onSubmit={handleSubmit(handleLogin)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input {...register("email", {required: "Email is required"})} type='text' className="input input-bordered w-full max-w-xs" />
                        {errors.email && <p role="alert" className='text-warning'>{errors.email?.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input {...register("password", {required: 'Password is required', minLength:{value: 6, message: 'Password must be 6 characters or longer.'}})} type='password' className="input input-bordered w-full max-w-xs" />
                        {errors.password && <p role="alert" className='text-warning'>{errors.password?.message}</p>}
                        <label className='label'><span className='label-text'>Forget Password?</span></label>
                    </div>  
                    <div className='mb-3'>
                        {logInError && <p className='text-warning'>{logInError}</p>} 
                    </div>                 
                    <input className='btn btn-accent text-white w-full' value='Login' type="submit" />
                </form>
                <p className='mt-2'>New to Doctors Portal? <Link to='/signup' className='text-secondary'>Create new account.</Link></p>
                <div className="divider">OR</div>
                <button className='m-auto btn btn-transparent uppercase w-full'>continue with google</button>
            </div>
        </div>
    );
};

export default Login;
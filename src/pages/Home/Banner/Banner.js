import React from 'react';
import chair from '../../../assets/images/chair.png';
import './Banner.css';

const Banner = () => {
    return (
        <div className='mx-5 mt-48'>
            <div className="hero banner pb-48">
                <div className="hero-content flex md:flex-row justify-between">
                    <div className='bg-left'>
                        <h1 className="text-5xl font-bold">Your new smiles start here.</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white">Get Started</button>
                    </div>
                    <img src={chair} className="max-w-lg md:w-1/2 rounded-lg shadow-2xl" alt='' />
                </div>
            </div>
        </div>
    );
};

export default Banner;
import React from 'react';
import clock from '../../../assets/icons/clock.svg';
import marker from '../../../assets/icons/marker.svg';
import phone from '../../../assets/icons/phone.svg';

const Landing = () => {
    return (
        <div className='grid grid-cols-3 gap-4 py-4'>
            <div className="card bg-base-100 shadow-xl bg-gradient-to-r from-primary to-secondary text-white">
                <div className="card-body flex-row">
                    <div className="icon flex">
                        <img src={clock} alt="" />
                    </div>
                    <div className="time ml-2">
                        <h4 className='text-xl font-bold mb-2'>Opening Hours</h4>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci, ullam.</p>
                    </div>
                </div>
            </div>
            <div className="card shadow-xl bg-accent text-white">
                <div className="card-body flex-row">
                    <div className="icon flex">
                        <img src={marker} alt="" />
                    </div>
                    <div className="time ml-2">
                        <h4 className='text-xl font-bold mb-2'>Visit Our Location</h4>
                        <p>Brooklyn, NY 10036, United States.</p>
                    </div>
                </div>
            </div>
            <div className="card bg-base-100 shadow-xl bg-gradient-to-r from-primary to-secondary text-white">
                <div className="card-body flex-row">
                    <div className="icon flex">
                        <img src={phone} alt="" />
                    </div>
                    <div className="time ml-2">
                        <h4 className='text-xl font-bold mb-2'>Contact Us Now</h4>
                        <p>+00 0123456789</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Landing;
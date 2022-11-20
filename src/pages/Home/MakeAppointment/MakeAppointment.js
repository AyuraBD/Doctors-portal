import React from 'react';
import './MakeAppointment.css';
import doctor from '../../../assets/images/doctor.png'

const MakeAppointment = () => {
    return (
        <section className='mt-32'>
            <div className="hero appointment">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={doctor} className="-mt-32 hidden lg:block lg:w-1/2 rounded-lg shadow-2xl" alt="" />
                    <div>
                        <h5 className="font-bold text-2xl uppercase text-primary">Appointment</h5>
                        <h1 className='text-4xl text-white font-bold'>Make an appointment Today</h1>
                        <p className="py-6 text-white">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                        <button className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white">Get Started</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MakeAppointment;
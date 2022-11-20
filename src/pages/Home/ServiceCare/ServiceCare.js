import React from 'react';
import treatment from '../../../assets/images/treatment.png'

const ServiceCare = () => {
    return (
        <div className='service-care grid gap-6 grid-cols-2 py-20'>
            <div className="left text-right">
                <img className='w-3/5 ml-auto' src={treatment} alt="" />
            </div>
            <div className="right">
                <h2 className='text-4xl'>Exceptional Dental Care, on Your Terms</h2>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                <button className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white">Get Started</button>
            </div>
        </div>
    );
};

export default ServiceCare;
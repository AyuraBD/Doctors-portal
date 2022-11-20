import React from 'react';

const ServicesCard = ({service}) => {
    const {logo, name, lorem} = service;
    return (        
        <div className="p-7 text-center shadow-2xl rounded-lg">
            <div className="service-img mb-4">
                <img className='m-auto' src={logo} alt="" />
            </div>
            <h3 className='text-xl mb-2 font-medium'>{name}</h3>
            <p>{lorem}</p>
        </div>
    );
};

export default ServicesCard;
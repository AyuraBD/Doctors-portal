import React from 'react';
import floride from '../../../assets/images/fluoride.png';
import cavity from '../../../assets/images/cavity.png';
import whitening from '../../../assets/images/whitening.png';
import ServicesCard from './ServicesCard';

const Services = () => {
    const services = [
        {
            id: 1,
            logo: floride,
            name: 'Fluoride Treatment',
            lorem: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
        },
        {
            id: 2,
            logo: cavity,
            name: 'Cavity Filling',
            lorem: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
        },
        {
            id: 3,
            logo: whitening,
            name: 'Teeth Whitening',
            lorem: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
        }
    ]
    return (
        <div className='services py-20'>
           <div className="service-heading text-center mb-7">
                <h3 className='uppercase font-bold text-primary text-xl'>Our Services</h3>
                <h1 className='text-4xl'>Services We Provide</h1>
           </div>
           <div className="services-body">
                <div className="grid grid-cols-3 gap-4">
                    {
                        services.map(service => <ServicesCard
                            key={service.id}
                            service={service}
                        ></ServicesCard>)
                    }
                </div>
           </div>
        </div>
    );
};

export default Services;
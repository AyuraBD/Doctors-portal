import React from 'react';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import Landing from '../Landing/Landing';
import MakeAppointment from '../MakeAppointment/MakeAppointment';
import ServiceCare from '../ServiceCare/ServiceCare';
import Services from '../Services/Services';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Landing></Landing>
            <Services></Services>
            <ServiceCare></ServiceCare>
            <MakeAppointment></MakeAppointment>
            <Testimonial></Testimonial>
            <Contact></Contact>
        </div>
    );
};

export default Home;
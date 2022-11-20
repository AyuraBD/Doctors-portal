import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';
import AppointmentOptions from './AppointmentOptions';
import BookingModal from '../BookingModal/BookingModal';
import { useQuery } from '@tanstack/react-query';
import Loading from '../../Shared/Loading/Loading';


const AvailableAppointments = ({selectedDate}) => {
    // const [appointmentOptions, setAppointmentOptions] = useState([]);
    const [treatment, setTreatment] = useState(null);
    const date = format(selectedDate, 'PP');

    const {data: appointmentOptions=[], refetch, isLoading} = useQuery({
        queryKey: ['appointmentOption', date],
        queryFn: async() =>{
            const res = fetch(`http://localhost:5000/appointmentOption?date=${date}`);
            const data = await (await res).json();
            return data;
        }
    })

    // useEffect(() =>{
    //     fetch('http://localhost:5000/appointmentOption')
    //     .then(res => res.json())
    //     .then( data => setAppointmentOptions(data))
    // }, [])

    if(isLoading){
        return <Loading></Loading>
    }

    return (
        <section className='mt-16'>
            <p className='text-center text-primary font-bold text-xl uppercase'>Available Appointment on : {format(selectedDate, 'PP')}</p>
            <div className='py-12 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    appointmentOptions.map(appointmentOption => <AppointmentOptions
                        key={appointmentOption._id}
                        appointmentOption={appointmentOption}
                        setTreatment={setTreatment}
                    ></AppointmentOptions>)
                }
            </div>
            {treatment &&
                <BookingModal
                selectedDate={selectedDate}
                treatment={treatment}
                setTreatment={setTreatment}
                refetch={refetch}
            ></BookingModal>}
        </section>
    );
};

export default AvailableAppointments;
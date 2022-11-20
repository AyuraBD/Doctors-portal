import React, { useContext } from 'react';
import { format } from 'date-fns';
import { AuthContext } from '../../../contexts/AuthProvider';
import toast from 'react-hot-toast';
import Loading from '../../Shared/Loading/Loading';

const BookingModal = ({ treatment, setTreatment, selectedDate, refetch }) => {
    const { name: treatmentName, slots } = treatment;
    const date = format(selectedDate, 'PP');
    const { user } = useContext(AuthContext);

    const handleBooking = e => {
        e.preventDefault();
        const form = e.target;
        const slot = form.slot.value;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;

        const booking = {
            appointmentDate: date,
            treatment: treatmentName,
            patient:name,
            slot,
            email,
            phone
        }
        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.acknowledged){
                    setTreatment(null);
                    toast.success('Booking confirmed');
                    refetch();
                }else{
                    toast.error(data.message);
                }
            })
    }
    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{treatmentName}</h3>
                    <form onSubmit={handleBooking} className='mt-6'>
                        <input type="text" disabled value={date} className="input w-full mb-2 input-bordered" />
                        <select name='slot' className="select select-bordered w-full max-w-xs mb-2">
                            {
                                slots.map((slot, i) => <option
                                    key={i} value={slot}>{slot}</option>)
                            }
                        </select>
                        <input name='name' disabled defaultValue={user?.displayName} type="text" placeholder="Your Name" className="input w-full mb-2 input-bordered" />
                        <input name='email' disabled defaultValue={user?.email} type="email" placeholder="Your Email" className="input w-full mb-2 input-bordered" />
                        <input name='phone' type="number" placeholder="Phone number" className="input w-full mb-2 input-bordered" />
                        <br />
                        <button className='w-full max-w-sm btn btn-accent'>Submit</button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;
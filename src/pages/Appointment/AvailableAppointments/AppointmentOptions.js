import React from 'react';

const AppointmentOptions = ({ appointmentOption, setTreatment}) => {
    const { _id, name, slots } = appointmentOption;
    return (
        <div>
            <div className="card shadow-xl">
                <div className="card-body justify-center items-center">
                    <h2 className="card-title text-secondary font-bold">{name}</h2>
                    <p>{slots.length > 0 ? slots[0] : 'Try Another day'}</p>
                    <p>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} available</p>
                    <div className="card-actions">
                        <label htmlFor="booking-modal"
                        disabled={slots.length === 0}
                        className="btn btn-primary text-white"
                        onClick={() =>setTreatment(appointmentOption)}
                        >Book Appointment</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppointmentOptions;
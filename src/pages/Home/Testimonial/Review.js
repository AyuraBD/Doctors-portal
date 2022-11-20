import React from 'react';

const Review = ({review}) => {
    const {reviewCnt, name, img, location} = review;
    return (
        <div className='p-6 drop-shadow-xl'>
            <p className='mb-5'>{reviewCnt}</p>
            <div className="name flex items-center">
                <div className="avatar mr-4">
                    <img className='border rounded-full' src={img} alt="" />
                </div>
                <div className="name">
                    <h5 className='text-xl font-bold'>{name}</h5>
                    <p>{location}</p>
                </div>
            </div>
        </div>
    );
};

export default Review;
import React from 'react';

const CardCurrentDate = () => {
    const currentDate = new Date();
    return (
        <div className="time_and_date">
            <h3 className="time_title">{currentDate.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })}</h3>
            <div className="date_container">
                <p className="date_title">{currentDate.toDateString()}</p>
            </div>
        </div>
    );
};

export default CardCurrentDate;

import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { IoIosCloseCircleOutline } from 'react-icons/io';
import { deleteTimeLocation } from '../services/timezones';

export const ChosenTimeZoneCard = ({ timezone = {}, deleteCardZone }) => {
    const searchedZone = timezone?.timezone?.split('/').at(-1).split('_').join(' ');
    const dateZone = timezone?.datetime?.substring(0, 10).split('-').reverse().join('/');
    const timeZone = timezone?.datetime?.substring(11, 16);
    const [isLoading, setIsLoading] = useState(false);

    const deleteSelectZone = async id => {
        setIsLoading(true);
        const { data } = await deleteTimeLocation(id);
        if (data?.success) {
            deleteCardZone(id);
            setIsLoading(false);
        }
    };

    return (
        <>
            {isLoading ? (
                <div className="spiner_container">
                    <div className="spiner"></div>
                </div>
            ) : (
                <div className="card_time">
                    <div className="information_time">
                        <h3>{searchedZone}</h3>
                        <p>{dateZone}</p>
                        <p>{timeZone}</p>
                    </div>
                    <IoIosCloseCircleOutline className="add_icon" size={20} color={'black'} onClick={() => deleteSelectZone(timezone?._id)} />
                </div>
            )}
        </>
    );
};

ChosenTimeZoneCard.propTypes = {
  deleteCardZone: PropTypes.func,
  timezone: PropTypes.object
}

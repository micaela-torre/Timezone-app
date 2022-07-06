import React, { useState } from 'react';
import CardCurrentDate from '../../components/CardCurrentDate';
import { SearchBox } from '../../components/SearchBox';
import { IoIosAdd } from 'react-icons/io';
import { IoIosCloseCircleOutline } from 'react-icons/io';

export const Home = () => {
    const [isVisible, setIsVisible] = useState(false);

    return (
        <div className="home_container">
            <div className="header">
                <h1 className="home_title">Timezone</h1>
                {!isVisible ? (
                    <div className="pulse_effect" onClick={() => setIsVisible(!isVisible)}>
                        <IoIosAdd className="add_icon" size={50} color={'white'} />
                    </div>
                ) : (
                    <IoIosCloseCircleOutline size={50} color={'white'} onClick={() => setIsVisible(!isVisible)} />
                )}
            </div>
            {isVisible ? <SearchBox /> : <CardCurrentDate />}
        </div>
    );
};

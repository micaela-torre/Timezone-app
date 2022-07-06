import React, { useEffect, useState } from 'react';
import { addSelectZone, getListTimeZones, getTimeZone } from '../services/timezones';
import { ChosenTimeZoneCard } from './ChosenTimeZoneCard';

export const SearchBox = () => {
    const [timezones, setTimezones] = useState([]);
    const [search, setSearch] = useState('');
    const [chosenTimeZones, setChosenTimeZones] = useState([]);
    const [suggestions, setSuggestions] = useState([]);
    
    useEffect(() => {
        getAllTimeZones();
    }, []);

    const onChangeHandler = search => {
        if (search.length > 0) {
            const regex = new RegExp(`${search}`, 'gi');
            const matches = timezones.filter(result => result?.match(regex));
            setSuggestions(matches);
        }

        setSearch(search);
    };

    const onSuggestHandler = search => {
        setSearch(search);
        getSelectionZone(search);
        setSuggestions([]);
    };

    const getAllTimeZones = async () => {
        try {
            const response = await getListTimeZones();
            if (response) {
                setTimezones(response);
            }
        } catch (err) {
            console.log(err);
        }
    };
    const getSelectionZone = async search => {
        try {
            const response = await getTimeZone(encodeURIComponent(search));
            if (response) {
                const data = await addSelectZone(encodeURIComponent(search), response?.response);
                setChosenTimeZones([...chosenTimeZones, data]);
            }
        } catch (err) {
            console.log(err);
        } finally {
            setSearch('');
        }
    };
    const deleteCardZone = id => {
        setChosenTimeZones(chosenTimeZones.filter(zone => zone._id !== id));
    };
    return (
        <>
            <div className="input_search">
                <p className="subtitle_input">Find the time zone of any part of the world</p>
                <input type="search" placeholder="Search.." onChange={e => onChangeHandler(e.target.value)} value={search.replace('/', ', ')} />
                {suggestions && (
                    <div className="suggestions_container">
                        {suggestions.map((suggestion, index) => (
                            <p className="suggestion_select" key={`suggestion-${index}`} onClick={() => onSuggestHandler(suggestion)}>
                                {suggestion}
                            </p>
                        ))}
                    </div>
                )}
            </div>
            <div className="container_cards">
                {!!chosenTimeZones?.length && chosenTimeZones.map(zone => <ChosenTimeZoneCard key={zone._id} timezone={zone} deleteCardZone={deleteCardZone} />)}
            </div>
        </>
    );
};

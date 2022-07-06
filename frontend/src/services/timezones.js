import axios from 'axios';
const API_URL = 'http://localhost:4000/api/timezones';
export const getListTimeZones = async () => {
    try {
        const { status, data } = await axios.get(API_URL);
        if (status === 200) {
            return data?.data;
        }
    } catch (err) {
        console.log(err);
    }
};

export const getTimeZone = async name => {
    try {
        const { status, data } = await axios.get(`${API_URL}/${name}`);
        if (status === 200) {
            return data;
        }
    } catch (err) {
        console.log(err);
    }
};

export const addSelectZone = async (search, location) => {
    try {
        const res = await axios.put(`${API_URL}/${search}`, location);
        return res?.data?.response;
    } catch (err) {
        console.log(err);
    }
};

export const deleteTimeLocation = async id => {
    try {
        const { status, data } = await axios.delete(`${API_URL}/${id}`);
        return { status, data };
    } catch (err) {
        console.log(err);
    }
};

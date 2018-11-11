import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://got-this-cf95b.firebaseio.com/'
});

export default instance;
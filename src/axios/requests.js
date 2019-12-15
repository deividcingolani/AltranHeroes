const APIURL = 'https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json';
const axios = require('axios');
export const getGnomes = () => axios.get(`${APIURL}`);



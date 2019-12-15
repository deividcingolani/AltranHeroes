const axios = require('axios');
export const getGnomes = (url) => axios.get(`${url}`);


export function getUrlGnomes (city){
    if(city==='Brastlewark'){
        return 'https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json'
    }
}



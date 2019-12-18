import * as actionTypes from './actionTypes';
import axios from '../../axios/axios-gnomes';

export const setGnomes = (gnomes) => {
    return {
        type: actionTypes.SET_GNOMES,
        gnomes: gnomes
    };
};

export const setGnomesFilter = (gnomesFilter) => {
    return {
        type: actionTypes.SET_GNOMES_FILTER,
        gnomesFilter: gnomesFilter
    };
};

export const setInitialized = (initialized) => {
    return {
        type: actionTypes.SET_INITIALIZED,
        initialized: initialized
    };
};

export const setGnomeSelected = (gnome) => {
    console.log('setGnomesSelected actions')
    return {
        type: actionTypes.SET_GNOME_SELECTED,
        gnomeSelected: gnome
    };
};

export const fetchGnomesFailed = () => {
    return {
        type: actionTypes.FETCH_GNOMES_FAILED
    };
};

export const initGnomes = () => {
    return dispatch => {
        axios.get('rrafols/mobile_test/master/data.json')
            .then(response => {
                const gnomes = response.data.Brastlewark;
                const gnomesCustom = gnomes.map((g, i) =>
                    g = {
                        ...g,
                        weight: (g.weight).toFixed(2),
                        height: (g.height).toFixed(2),
                        gender: (Math.random() > 0.7 ? 'Female' : 'Male'),
                        city: 'Brastlewark'
                    }
                )

                dispatch(setGnomes(gnomesCustom));
                dispatch(setGnomesFilter(gnomesCustom));
                dispatch(setInitialized(true));
            })
            .catch(error => {
                dispatch(fetchGnomesFailed());
            });
    };
};


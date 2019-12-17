import { SET_GNOME } from './actionsTypes';

const setGnomes = (gnomes) => {
    return {
        type: SET_GNOME,
        payload: gnomes
    }
};

export { setGnomes };
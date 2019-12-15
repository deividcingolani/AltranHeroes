import { SET_GNOME } from './actions';

const setGnomes = (gnomes) => {
    return {
        type: SET_GNOME,
        payload: gnomes
    }
};

export { setGnomes };
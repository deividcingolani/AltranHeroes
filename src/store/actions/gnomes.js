import * as actionTypes from "./actionTypes";
import setGnomesApi from "../../api/Gnomes";

export const setGnomes = gnomes => {
  return {
    type: actionTypes.SET_GNOMES,
    gnomes: gnomes
  };
};

export const setInitialized = initialized => {
  return {
    type: actionTypes.SET_INITIALIZED,
    initialized: initialized
  };
};

export const fetchGnomesFailed = () => {
  return {
    type: actionTypes.FETCH_GNOMES_FAILED
  };
};

export const initGnomes = () => {
  return dispatch => {
    return setGnomesApi()
      .then(gnomes => {
        const gnomesCustom = gnomes.map(
          (g, i) =>
            (g = {
              ...g,
              weight: g.weight.toFixed(2),
              height: g.height.toFixed(2),
              gender: Math.random() > 0.7 ? "Female" : "Male",
              city: "Brastlewark"
            })
        );

        dispatch(setGnomes(gnomesCustom));
        dispatch(setInitialized(true));
      })
      .catch(() => {
        dispatch(fetchGnomesFailed());
      });
  };
};

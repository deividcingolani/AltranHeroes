import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../../shared/utility";

const initialState = {
  gnomes: [],
  gnomesFilter: [],
  gnomeSelected: {},
  error: false,
  initialized: false
};
const setInitialized = (state, action) => {
  return updateObject(state, {
    initialized: action.initialized
  });
};

const setGnomes = (state, action) => {
  return updateObject(state, {
    gnomes: action.gnomes
  });
};

const setGnomesFilter = (state, action) => {
  return updateObject(state, {
    gnomesFilter: action.gnomesFilter
  });
};

const setGnomeSelected = (state, action) => {
  console.log("setGnomesSelected ");
  return updateObject(state, {
    gnomeSelected: action.gnomeSelected
  });
};

const fetchGnomesFailed = (state, action) => {
  return updateObject(state, { error: true });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_GNOMES:
      return setGnomes(state, action);
    case actionTypes.FETCH_GNOMES_FAILED:
      return fetchGnomesFailed(state, action);
    case actionTypes.SET_GNOME_SELECTED:
      return setGnomeSelected(state, action);
    case actionTypes.SET_INITIALIZED:
      return setInitialized(state, action);
    case actionTypes.SET_GNOMES_FILTER:
      return setGnomesFilter(state, action);

    default:
      return state;
  }
};

export default reducer;

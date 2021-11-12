import { ActionTypes } from '../constants/actionTypes';

const initialState = {
  offers: [],
};

export const offerReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_OFFERS:
      return { ...state, offers: payload };
    default:
      return state;
  }
};

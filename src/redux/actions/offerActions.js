import { ActionTypes } from '../constants/actionTypes';

export const setOffers = (offers) => {
  return {
    type: ActionTypes.SET_OFFERS,
    payload: offers,
  };
};

export const selectOffer = (offer) => {
  return {
    type: ActionTypes.SELECTED_OFFER,
    payload: offer,
  };
};

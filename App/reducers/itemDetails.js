import {SHOW_ITEM_DETAILS} from '../actions/action-types';

const initialState = {};

export default function (state = initialState, action) {
  const {type, payload} = action;

  switch (type) {
    case SHOW_ITEM_DETAILS:
      return {...state, ...payload};
    default:
      return state;
  }
}

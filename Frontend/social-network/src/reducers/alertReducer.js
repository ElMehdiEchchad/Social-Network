import { SET_ALERT, REMOVE_ALERT } from "../actions/types";

const initialState = [];
console.log("state from alert of reducers->", initialState);
export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case SET_ALERT:
      console.log("state-", state, payload);
      return [...state, payload];
    case REMOVE_ALERT:
      return state.filter((alert) => alert.id !== payload);
    default:
      return state;
  }
}
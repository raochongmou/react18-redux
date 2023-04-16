import * as constants from "./constants";

const defaultState = {
  counter: 100
};

export const reducer = (state = defaultState, actions) => {
  switch (actions.type) {
    case constants.ADDCOUNTER:
      return { ...state, counter: state.counter + actions.counter };
    default:
      return state;
  }
};

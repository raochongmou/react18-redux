import * as constants from "./constants";

const defaultState = {
  counter: 100,
  banners: [],
  goodsList: [],
  recommends: []
};

export const reducer = (state = defaultState, actions) => {
  switch (actions.type) {
    case constants.ADDCOUNTER:
      return { ...state, counter: state.counter + actions.counter };
    case constants.CHANGEBANNERS:
      return { ...state, banners: actions.banners };
    case constants.CHANGERECOMMENDS:
      return { ...state, recommends: actions.recommends };
    case constants.CHANGEGOODSLIST:
      return { ...state, goodsList: actions.goodsList };
    default:
      return state;
  }
};

import * as constants from "./constants";
import axios from "axios";

export const addCounterAction = counter => ({
  type: constants.ADDCOUNTER,
  counter
});

export const changeBanners = banners => ({
  type: constants.CHANGEBANNERS,
  banners
});
export const changeRecommends = recommends => ({
  type: constants.CHANGERECOMMENDS,
  recommends
});

export const changeGoodsList = goodsList => ({
  type: constants.CHANGEGOODSLIST,
  goodsList
});

export const fetchGoodsList = () => {
  return function(dispatch, getState) {
    // console.log("----------被执行", dispatch);
    // console.log("----------被执行", getState().banners);
    axios.get("/static/data.json").then(res => {
      console.log("res", res);
      dispatch(changeGoodsList(res.data.data.goodsList));
    });
  };
};

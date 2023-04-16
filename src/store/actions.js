import * as constants from "./constants";

export const addCounterAction = counter => ({
  type: constants.ADDCOUNTER,
  counter
});

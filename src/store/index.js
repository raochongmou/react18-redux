import { createStore, applyMiddleware, compose } from "redux";
import { reducer } from "./reducer";
import { middleware, thunk, log } from "./middleware";
// import thunk from "redux-thunk";

// 方式一：配置redux_devtools_extension工具
const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ trace: true }) || compose;

const store = createStore(reducer);
// const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

// log(store);
// thunk(store);
middleware(store, thunk, log);

export default store;

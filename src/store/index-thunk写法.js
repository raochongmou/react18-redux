import { createStore, applyMiddleware, compose } from "redux";
import { reducer } from "./reducer";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

// 方式一：配置redux_devtools_extension工具
const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ trace: true }) || compose;

export default createStore(
  reducer,
  composeEnhancers(applyMiddleware(thunk))
  // composeWithDevTools(applyMiddleware(thunk))
);

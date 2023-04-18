import App from "./App";
import ReactDOM from "react-dom/client";
import store from "./store";
import { Provider } from "react-redux";

const app = ReactDOM.createRoot(document.querySelector("#root"));

app.render(
  <Provider store={store}>
    <App />
  </Provider>
);

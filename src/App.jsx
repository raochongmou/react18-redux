import React, { PureComponent } from "react";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Wrapper from "./css/style";
import ReduxHoc from "./hoc/ReduxHoc";

export class App extends PureComponent {
  render() {
    const { addCounter, counter } = this.props;
    return (
      <Wrapper>
        <div className="app">
          <div>
            App counter：{counter}
            <button onClick={() => addCounter(1)}>+1</button>
            <button onClick={() => addCounter(5)}>+5</button>
            <button onClick={() => addCounter(10)}>+10</button>
          </div>
          <Home />
          <Profile />
        </div>
      </Wrapper>
    );
  }
}

export default ReduxHoc(App);

import React, { PureComponent } from "react";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Wrapper from "./css/style";
import store from "./store";
import { addCounterAction } from "./store/actions";

export class App extends PureComponent {
  constructor() {
    super();
    this.state = {
      counter: store.getState().counter
    };
  }
  addCounter(counter) {
    store.dispatch(addCounterAction(counter));
  }
  componentDidMount() {
    store.subscribe(() => {
      this.setState({
        counter: store.getState().counter
      });
    });
  }
  render() {
    const { counter } = this.state;
    return (
      <Wrapper>
        <div className="app">
          <div>
            App counter：{counter}
            <button onClick={() => this.addCounter(1)}>+1</button>
            <button onClick={() => this.addCounter(5)}>+5</button>
            <button onClick={() => this.addCounter(10)}>+10</button>
          </div>
          <Home />
          <Profile />
        </div>
      </Wrapper>
    );
  }
}

export default App;

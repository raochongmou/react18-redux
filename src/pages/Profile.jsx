import React, { PureComponent } from "react";
import store from "../store";
import { addCounterAction } from "../store/actions";

export class Profile extends PureComponent {
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
      <div>
        Home：counter: {counter}
        <button onClick={() => this.addCounter(1)}>+1</button>
        <button onClick={() => this.addCounter(8)}>+8</button>
        <button onClick={() => this.addCounter(100)}>+100</button>
      </div>
    );
  }
}

export default Profile;

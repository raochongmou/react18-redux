import React, { PureComponent } from "react";
import ReduxHoc from "../hoc/ReduxHoc";

export class Profile extends PureComponent {
  render() {
    const { addCounter, counter } = this.props;
    return (
      <div>
        Profile: {counter}
        <button onClick={() => addCounter(1)}>+1</button>
        <button onClick={() => addCounter(8)}>+8</button>
        <button onClick={() => addCounter(100)}>+100</button>
      </div>
    );
  }
}

export default ReduxHoc(Profile);

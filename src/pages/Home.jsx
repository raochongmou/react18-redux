import React, { PureComponent } from "react";
// import store from "../store";
import { addCounterAction } from "../store/actions";
import { connect } from "react-redux";

export class Home extends PureComponent {
  // constructor() {
  //   super();
  //   this.state = {
  //     counter: store.getState().counter
  //   };
  // }
  // addCounter(counter) {
  //   store.dispatch(addCounterAction(counter));
  // }
  // componentDidMount() {
  //   store.subscribe(() => {
  //     this.setState({
  //       counter: store.getState().counter
  //     });
  //   });
  // }
  render() {
    // const { counter } = this.state;
    const { counter, addCounter } = this.props;
    return (
      <div>
        Home：counter: {counter}
        <button onClick={() => addCounter(1)}>+1</button>
        <button onClick={() => addCounter(8)}>+8</button>
        <button onClick={() => addCounter(100)}>+100</button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  counter: state.counter
});

const mapDispatchToProps = dispatch => ({
  addCounter: count => dispatch(addCounterAction(count))
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);

import { PureComponent } from "react";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Wrapper from "./css/style";
import { connect } from "react-redux";
// import store from "./store";
import { addCounterAction } from "./store/actions";
import Category from "./pages/Categorys";
import About from "./pages/About";

export class App extends PureComponent {
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
          <Category />
          <About />
        </div>
      </Wrapper>
    );
  }
}

const mapStateToProps = state => ({
  counter: state.counter
});

const mapDispatchToProps = dispatch => ({
  addCounter: count => dispatch(addCounterAction(count))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

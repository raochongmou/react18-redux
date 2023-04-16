import { PureComponent } from "react";
import store from "../store";
import { addCounterAction } from "../store/actions";

export default OriginComponent => {
  return class extends PureComponent {
    constructor(props) {
      super(props);
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
        <OriginComponent
          {...this.porps}
          counter={counter}
          addCounter={count => this.addCounter(count)}
        />
      );
    }
  };
};

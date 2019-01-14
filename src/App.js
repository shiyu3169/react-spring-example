import React, { Component } from "react";
import "./App.css";
import { Transition, animated } from "react-spring";
import Component1 from "./components/Component1";
import Component2 from "./components/Component2";
import Component3 from "./components/Component3";

class App extends Component {
  state = {
    showCoponent3: false
  };

  toggle = () => {
    this.setState({
      showCoponent3: !this.state.showCoponent3
    });
  };
  render() {
    return (
      <div>
        <Component1 />
        <Component2 toggle={this.toggle} />
        <Transition
          native
          items={this.state.showCoponent3}
          from={{ opacity: 0 }}
          enter={{ opacity: 1 }}
          leave={{ opacity: 0 }}>
          {show =>
            show &&
            (props => (
              <animated.div style={props}>
                <Component3 />
              </animated.div>
            ))
          }
        </Transition>
      </div>
    );
  }
}

export default App;

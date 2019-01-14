import React, { Component } from "react";
import { Spring } from "react-spring";

export default class Component1 extends Component {
  render() {
    return (
      <Spring
        from={{ opacity: 0, marginTop: -500 }}
        to={{ opacity: 1, marginTop: 0 }}>
        {props => (
          <div style={props}>
            <div style={c1Style}>
              <h1>Component 1</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad quo
                corporis non ab consequuntur nam incidunt error officia
                dignissimos odio possimus cupiditate maiores quibusdam a,
                doloremque itaque eos commodi soluta.
              </p>
            </div>
          </div>
        )}
      </Spring>
    );
  }
}

const c1Style = {
  background: "steelblue",
  color: "white",
  padding: "1.5rem"
};

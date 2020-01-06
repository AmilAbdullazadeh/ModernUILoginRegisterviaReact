import React, { Component } from "react";
import "./App.scss";
import { Login, Register } from "./components/login/index";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoginActive: true
    };
  }

  changeState() {
    const { isLoginActive } = this.state;

    if (isLoginActive) {
      this.rightSide.classList.add("left");
      this.rightSide.classList.remove("right");
    } else {
      this.rightSide.classList.add("right");
      this.rightSide.classList.remove("left");
    }

    this.setState(prevState => ({ isLoginActive: !prevState.isLoginActive }));
  }

  render() {
    const { isLoginActive } = this.state;
    const current = isLoginActive ? "Register" : "Login";
    const currentActive = isLoginActive ? "login" : "register";

    return (
      <div className="App">
        <div className="login">
          <div className="container">
            <div className="col-md-12 col-12">
              {isLoginActive && (
                <Login containerRef={ref => (this.current = ref)} />
              )}
              {!isLoginActive && (
                <Register containerRef={ref => (this.current = ref)} />
              )}
            </div>
          </div>
          <RightSide
            current={current}
            containerRef={ref => (this.rightSide = ref)}
            onClick={this.changeState.bind(this)}
          />
        </div>
      </div>
    );
  }
}

const RightSide = props => {
  return (
    <div
      className="right-side"
      ref={props.containerRef}
      onClick={props.onClick}
    >
      <div className="inner-container">
        <div className="text">{props.current}</div>
      </div>
    </div>
  );
};

export default App;

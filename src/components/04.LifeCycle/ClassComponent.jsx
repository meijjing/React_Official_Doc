import React, { Component } from "react";

class ClassComponent2 extends Component {
  constructor(props) {
    super(props);
    console.log("constructor");
    this.state = { date: new Date() };
    // this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    console.log("componentDidMount");
    this.timerId = setInterval(() => this.tick(), 10000);
  }

  componentDidUpdate() {
    // console.log("componentDidUpdate");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");

    clearInterval(this.timerId);
  }

  tick() {
    // console.log("tick");
    this.setState({ date: new Date() });
  }

  handleClick = () => {
    alert(this.state.date);
  };

  render() {
    console.log("render");
    return (
      <div>
        <h3 onClick={this.handleClick}>Hello World!</h3>
        <h4>{this.state.date.toLocaleString()}</h4>
      </div>
    );
  }
}

export default ClassComponent2;

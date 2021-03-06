import React from "react";

export default class StopWatch extends React.Component {
  constructor() {
    super();
    this.state = {
      counter: 0
    };
  }
//This method is used to increase the counter by 1 repeatedly after one second
  onStart = e => {
    e.preventDefault();
    this.interval = setInterval(() => {
      this.setState({ counter: this.state.counter + 1 });
    }, 1000);
  };
//This method is used to stop the interval
  onStop = e => {
    e.preventDefault();
    clearInterval(this.interval);
  };
  render() {
    return (
      <div>
        <p>{this.state.counter} seconds have passed</p>
        <button onClick={this.onStart}>Start</button>
        <button onClick={this.onStop}>Stop</button>
      </div>
    );
  }
}

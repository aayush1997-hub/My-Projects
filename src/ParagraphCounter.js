import React from "react";

export default class ParagraphCounter extends React.Component {
  constructor() {
    super();
    this.state = {
      counter: 0
    };
  }
  handleClick = e => {
    e.preventDefault();
    this.setState({ counter: this.state.counter + 1 });
  };
  render() {
    return (
      <div>
        <h2>Paragraph Clicked {this.state.counter} times</h2>
        <p onClick={this.handleClick}>Hi There.Click this Paragraph</p>
      </div>
    );
  }
}

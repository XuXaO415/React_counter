import React from "react";

class Counter extends React.Component {
  constructor(props) {
    //super is a reference to the parent class
    super(props);
    this.state = { count: 0, isHiding: false};
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }
  increment = () => {
    console.log(this.state.count);
    console.log(this);
    this.setState({ count: this.state.count + 1 });
  }
  decrement = () => {
    console.log(this.state.count);
    console.log(this);
    this.setState({ count: this.state.count - 1 });
  }
  render() {
   const {color} = this.props;
   const {count} = this.state;
    return (
      <div>
        <h1 style={{ color }}>I am counter</h1>
        <h3>Count is: {count}</h3>
        {/* <button onClick={() => this.setState({count: count + 1})}>Add 1</button>
        <button onClick={() => this.setState({count: count - 1})}>Subtract</button> */}
        <button onClick={this.increment}>Add 1</button>
        <button onClick={this.decrement}>Subtract</button>
      </div>
    );
  }
}

export default Counter;

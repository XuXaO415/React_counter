import React from "react";
import createReactClass from "create-react-class";
import { CounterMixin } from "./CounterMixin";

const Counter = createReactClass({
    mixins: [CounterMixin],
    render: function () {
        return (
            <div>
                <div>Current count: {this.state.count}</div>
                <div>
                    <button onClick={this.decrement}>-</button>
                    <button onClick={this.increment}>+</button>
                </div>
            </div>
        );
    }
});

export default Counter;
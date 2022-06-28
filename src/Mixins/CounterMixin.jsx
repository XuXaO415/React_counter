import React from "react";
import createReactClass from "create-react-class";


//this object is used (methods and state) in Counter component
const CounterMixin = createReactClass ({
    mixins: [CounterMixin],
    render: function () {
        return (
            <div>
                <h1>{''.repeat(this.state.count)}</h1>
                <div>
                    <button onClick={this.decrement}>-</button>
                    <button onClick={this.increment}>+</button>
                </div>
            </div>
        );
    }
})

export default CounterMixin;
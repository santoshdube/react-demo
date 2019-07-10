import React, { Component } from "react";
import Counter from "./counter";
class Counters extends Component {
  render() {
    const { onReset, onDelete, onIncrement } = this.props;
    return (
      <div>
        <button onClick={onReset} className="btn btn-primary btn-sm m-2">
          Reset
        </button>
        {this.props.counters.map(counters => (
          <Counter
            key={counters.id}
            onDelete={onDelete}
            onIncrement={onIncrement}
            counters={counters}
          />
        ))}
      </div>
    );
  }
}

export default Counters;

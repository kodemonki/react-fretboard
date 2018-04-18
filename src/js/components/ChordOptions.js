import React from "react";

export default class ChordOptions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {key: 0};
  }

  handleChange(event) {
    this.setState({key: event.target.value});
  }

  getKeyList() {
    const keys = ['a','a#','b','c','c#','d','d#','e','f','f#','g','g#'];

    const keyList = keys.map((key,i) => {
      return (<option key={i} value={i}>{key}</option>);
    });

    return keyList;
  }

  render() {
    return <div className="options">
        <form onSubmit={this.handleSubmit}>
          <label>
          Key:<select value={this.state.key} onChange={this.handleChange.bind(this)}>{this.getKeyList()}</select>
          </label>
        </form>
      </div>;
  }
}

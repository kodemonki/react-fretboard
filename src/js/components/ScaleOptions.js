import React from "react";

export default class ScaleOptions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {key: 0, scale:0, mode:0};
  }

  handleKeyChange(event) {
    const newState = Object.assign(this.state, { key: event.target.value });
    this.setState(newState);
  }

  handleScaleChange(event) {
    const newState = Object.assign(this.state, { scale: event.target.value });
    this.setState(newState);
  }

  handleModeChange(event) {
    const newState = Object.assign(this.state, { mode: event.target.value });
    this.setState(newState);
  }

  getKeyList() {
    const keys = ['a','a#','b','c','c#','d','d#','e','f','f#','g','g#'];

    const keyList = keys.map((key,i) => {
      return (<option key={i} value={i}>{key}</option>);
    });

    return keyList;
  }

  getScaleList() {
    const scales = ['Major','Minor','Blues'];

    const keyList = scales.map((scale,i) => {
      return (<option key={i} value={i}>{scale}</option>);
    });

    return keyList;
  }

  getModeList() {
    const modes = ['Ionian','Dorian','Phrygian','Lydian','Mixolydian','Aeolian','Locrian'];

    const keyList = modes.map((mode,i) => {
      return (<option key={i} value={i}>{mode}</option>);
    });

    return keyList;
  }

  render() {
    return <div className="options">
      <form onSubmit={this.handleSubmit}>
        <label>
          Key:<select value={this.state.key} onChange={this.handleKeyChange.bind(this)}>{this.getKeyList()}</select>
        </label>
        <label>
          Scale:<select value={this.state.scale} onChange={this.handleScaleChange.bind(this)}>{this.getScaleList()}</select>
        </label>
        <label>
          Mode:<select value={this.state.mode} onChange={this.handleModeChange.bind(this)}>{this.getModeList()}</select>
        </label>
      </form>
    </div>;
  }
}

import React from "react";

export default class ScaleOptions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {root: this.props.root, scale:this.props.scale, mode:this.props.mode};
  }

  handleRootChange(event) {
    const newOptions = Object.assign(this.state, { root: event.target.value });
    this.props.changeOptions(newOptions);
  }

  handleScaleChange(event) {
    const newOptions = Object.assign(this.state, { scale: event.target.value });
    this.props.changeOptions(newOptions);
  }

  handleModeChange(event) {
    const newOptions = Object.assign(this.state, { mode: event.target.value });
    this.props.changeOptions(newOptions);
  }

  handleSubmit(event) {
    this.props.changeOptions(this.state);
    event.preventDefault();
  }

  getRootList() {
    const roots = ['a','a#','b','c','c#','d','d#','e','f','f#','g','g#'];
    const rootList = roots.map((root,i) => {
      return (<option key={i} value={i}>{root}</option>);
    });
    return rootList;
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
      <form onSubmit={this.handleSubmit.bind(this)}>
        <label>
          Root:<select value={this.state.root} onChange={this.handleRootChange.bind(this)}>{this.getRootList()}</select>
        </label>
        <label>
          Scale:<select value={this.state.scale} onChange={this.handleScaleChange.bind(this)}>{this.getScaleList()}</select>
        </label>
        {/*
        <label>
          Mode:<select value={this.state.mode} onChange={this.handleModeChange.bind(this)}>{this.getModeList()}</select>
        </label>
        */}
        {/*<input type="submit" value="Render" />*/}
      </form>
    </div>;
  }
}

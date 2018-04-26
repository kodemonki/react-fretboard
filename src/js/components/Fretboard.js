import React from "react";

import String from "./String";

export default class FretBoard extends React.Component {
  render() {
    return <div className="fretboard">
      {this.props.fretboard.map((notes, index) => {
        return <String key={index} noteArray={notes} highlight={this.props.highlight} root={this.props.options.root} mode={this.props.options.mode}/>;
      })}
    </div>;
  }
}

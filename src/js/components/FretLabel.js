import React from "react";

export default class FretLabel extends React.Component {
  render() {
    return <div className="fret-label">{this.props.note}</div>;
  }
}

import React from "react";

export default class FretLabel extends React.Component {
  render() {
    return <div className = "FretLabel" > {
      this.props.note
    } < /div>;
  }
}

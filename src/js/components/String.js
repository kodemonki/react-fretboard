import React from "react";

export default class String extends React.Component {
  render() {
    return <div>
             <h2>{this.props.baseNote}</h2>             
           </div>;
  }
}

import React from "react";

import String from "./String";

export default class FretBoard extends React.Component {
  render() {
    return <div>
             {this.props.guitar.strings.map((note, index) => {
               return <String key={index} guitar={this.props.guitar} baseNote={note}/>;
             })}
           </div>;
  }
}

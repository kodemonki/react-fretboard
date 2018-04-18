import React from "react";

import Fret from "./Fret";

export default class String extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <div>
      {this.props.noteArray.map((note, index) => {
        return <Fret key={index} note={note}/>;
      })}
    </div>;
  }
}

import React from "react";

import String from "./String";

export default class Fretboard extends React.Component {
  render() {
    return <div>
             <h1>Fretboard</h1>
             {this.props.guitar.strings.map((note, index) => {
               return <String key={index} baseNote={note}/>;
             })}
           </div>;
  }
}

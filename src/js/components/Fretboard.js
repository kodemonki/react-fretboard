import React from "react";

import String from "./String";

export default class FretBoard extends React.Component {

  constructor(props){
    super(props);
    var fretboard = [];
    for (var i = 0; i < this.props.guitar.strings.length; i++) {
      var notes = [];
      for(var n=0;n<this.props.guitar.semitones;n++){
        var note = this.props.guitar.strings[i]+n;
        notes.push(note);
      }
      fretboard.push(notes);
    }
    this.state = {fretboard};
  }

  render() {
    return <div>
      {this.state.fretboard.map((notes, index) => {
        return <String key={index} noteArray={notes}/>;
      })}
      </div>;
  }
}

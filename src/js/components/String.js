import React from "react";

import Fret from "./Fret";

export default class String extends React.Component {
  constructor(props){
    super(props);
  }
  getFrets(note){
    const semitones = 24;
    const octave = 12;
    var frets = [];
    for (var i = 0; i < semitones; i++) {
      var tone = this.props.baseNote+i;
      while(tone >= octave){
        tone -= octave;
      }
      frets.push(<Fret note={tone} key={i} />);
    }
    return frets;
  }
  render() {
    return <div>
             {this.getFrets(this.props.baseNote)}
           </div>;
  }
}

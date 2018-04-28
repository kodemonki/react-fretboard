import React from "react";
export default class Fret extends React.Component {
  getNote(num){
    const octave = 12;
    var octaveCount = 0;
    while(num >= octave){
      num -= octave;
      octaveCount++;
    }
    const valueArray=['a','a#','b','c','c#','d','d#','e','f','f#','g','g#'];
    return valueArray[num];
  }
  render() {
    console.log(this.props);
    return <div className={"fret "+this.props.highlightClassName}>{this.getNote(this.props.note)}</div>;
  }
}

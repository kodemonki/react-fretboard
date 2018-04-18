import React from "react";

/*
0:a 1:a# 2:b 3:c 4:c# 5:d 6:d# 7:e 8:f 9:f# 10:g 11:g#
*/

export default class Fret extends React.Component {
  constructor(props){
    super(props);
  }
  getNote(num){
    const octave = 12;
    while(num >= octave){
      num -= octave;
    }
    const valueArray=['a','a#','b','c','c#','d','d#','e','f','f#','g','g#'];
    return valueArray[num];
  }
  render() {
    return <div className="fret">{this.getNote(this.props.note)}</div>;
  }
}

import React from "react";

export default class Chords extends React.Component {
  getNote(num){
    const valueArray=['a','a#','b','c','c#','d','d#','e','f','f#','g','g#'];
    const octave = 12;
    var octaveCount = 0;
    while(num >= octave){
      num -= octave;
      octaveCount++;
    }
    return valueArray[num];
  }
  getChords(){
    const highlight = this.props.highlight;
    var chords = [];
    var suffix = [
      'Major seventh',
      'Minor seventh',
      'Minor seventh',
      'Major seventh',
      'Dominant seventh',
      'Minor seventh',
      'Minor seventh flat five',
    ];
    for (var i = 0; i < highlight.length; i++) {
      chords.push(<li key={i} >{this.getNote(highlight[i]+Number(this.props.options.root)).toUpperCase()+' '+suffix[i]}</li>);
    }
    return chords;
  }
  render() {
    return <div className="Chords">
    {this.props.options.scale !== '2' && <div><h4>Chords</h4><ul>{this.getChords()}</ul></div>}
    </div>;
  }
}

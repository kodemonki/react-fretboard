import React from "react";

import Fret from "./Fret";

export default class String extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props;
  }
  isRoot(note){
    if((note % 12) == ((Number(this.props.root)+Number(this.props.highlight[Number(this.props.mode)])) % 12)){
      return true;
    }else{
      return false;
    }
  }
  isHighlight(note){
    var found = -1;
    for (var highlight in this.props.highlight) {
      const number1 = (this.props.highlight[highlight]+Number(this.props.root)) % 12;
      const number2 = note % 12;
      if(number1 === number2){
        found = Number(highlight);
        break;
      }
    }
    return found;
  }
  render() {
    return <div>
      {this.props.noteArray.map((note, index) => {
        var highlightClassName = 'lowlight';
        var num = this.isHighlight(note);
        if( num > -1){
          highlightClassName = 'highlight highlight'+num;
        }
        if(this.isRoot(note)){
          highlightClassName = 'root';
        }
        return <Fret key={index} note={note} highlightClassName={highlightClassName}/>;
      })}
    </div>;
  }
}

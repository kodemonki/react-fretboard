import React from "react";
import FretLabel from "./FretLabel";

export default class FretLabels extends React.Component {
  getLabels(semitones){
    var frets = [];
    for (var i = 0; i < semitones; i++) {
      frets.push(<FretLabel note={i} key={i} />);
    }
    return frets;
  }
  render() {
    return <div className="FretLabels">
             {this.getLabels(this.props.guitar.semitones)}
           </div>;
  }
}

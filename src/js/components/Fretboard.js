import React from "react";

import String from "./String";

export default class FretBoard extends React.Component {
  constructor(){
    super();
  }
  render() {
    return <div>
             {this.props.guitar.strings.map((note, index) => {
               return <String key={index} baseNote={note}/>;
             })}
           </div>;
  }
}

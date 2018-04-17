import React from "react";

import Options from "./Options";
import Fretboard from "./Fretboard";

export default class Layout extends React.Component {
  constructor(){
    super();
    this.state = {
      guitar: {
        strings:['E','A','D','G','B','E'],
        octaves:2
      }
    }
  }
  render() {
    return <div>
             <Options guitar={this.state.guitar}/>
             <Fretboard guitar={this.state.guitar}/>
           </div>;
  }
}

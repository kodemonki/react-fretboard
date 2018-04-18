import React from "react";

import Options from "./Options";
import FretLabels from "./FretLabels";
import FretBoard from "./FretBoard";

export default class Layout extends React.Component {

  constructor(){
    super();
    this.state = {
      guitar: {
        strings:[7,2,10,5,0,7],
        semitones:25
      }
    }
  }
  render() {
    return <div>
             <Options guitar={this.state.guitar}/>
             <FretLabels guitar={this.state.guitar}/>
             <FretBoard guitar={this.state.guitar}/>
           </div>;
  }
}

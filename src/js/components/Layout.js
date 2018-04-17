import React from "react";

import Options from "./Options";
import FretLabels from "./FretLabels";
import FretBoard from "./FretBoard";

/*
0:a 1:a# 2:b 3:c 4:c# 5:d 6:d# 7:e 8:f 9:f# 10:g 11:g#
*/

export default class Layout extends React.Component {

  constructor(){
    super();
    this.state = {
      guitar: {
        strings:[7,2,10,5,0,7]
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

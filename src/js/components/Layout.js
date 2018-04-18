import React from "react";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Navigation from "./Navigation";
import ScaleOptions from "./ScaleOptions";
import ChordOptions from "./ChordOptions";
import FretLabels from "./FretLabels";
import FretBoard from "./FretBoard";

export default class Layout extends React.Component {

  constructor(){
    super();
    this.state = {
      guitar: {
        strings:[7,2,10,5,0,7],
        semitones:25,
        octave:12
      }
    }
  }

  render() {
    return <Router>
      <div className="Layout">
        <Navigation/>

        <Route path="/scale" component={ScaleOptions} />
        <Route path="/chord" component={ChordOptions} />

        <FretLabels guitar={this.state.guitar}/>
        <FretBoard guitar={this.state.guitar}/>
      </div>
    </Router>;
  }
}

import React from "react";

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

export default class Navigation extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <nav className="navigation">
      <Link to={"/scale"}><button>Scale</button></Link>
      <Link to={"/chord"}><button>Chord</button></Link>
    </nav>;
  }
}

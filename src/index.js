import React from "react";
import ReactDOM from "react-dom";

import './styles/appStyles.scss';

const Index = () => {
  return <div><h1>Hello React!</h1></div>;
};

ReactDOM.render(<Index />, document.getElementById("index"));

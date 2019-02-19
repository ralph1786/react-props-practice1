import React, { Component } from "react";
import Header from "./Components/Header";
import "./App.css";

class App extends Component {
  state = {
    header: "Good Morning"
  };

  render() {
    return <Header header={this.state.header} />;
  }
}

export default App;

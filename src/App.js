import React, { Component } from "react";
import "./App.scss";
import { Cards, Chart, CountryPicker } from "./components/imports.js";

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <Cards />
        <Chart />
        <CountryPicker />
      </div>
    );
  }
}

import React, { Component } from "react";
import "./App.scss";
import { Cards, Chart, CountryPicker } from "./components/imports.js";
import { fetchData } from "./api/index.js";

export default class App extends Component {
  state = {
    data: {},
  };

  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({ data: fetchedData });
    console.log(this.state.data);
  }

  render() {
    const { data } = this.state;
    return (
      <div className="container">
        <Cards data={data} />
        <Chart />
        <CountryPicker />
      </div>
    );
  }
}

import React, { Component } from "react";
import classes from "./App.module.scss";
import { Cards, Chart, CountryPicker } from "./components/imports.js";
import { fetchData } from "./api/index.js";

export default class App extends Component {
  state = {
    data: {},
  };

  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({ data: fetchedData });
  }

  render() {
    const { data } = this.state;
    return (
      <div className={classes.container}>
        <Cards data={data} />
        <CountryPicker />
        <Chart />
      </div>
    );
  }
}

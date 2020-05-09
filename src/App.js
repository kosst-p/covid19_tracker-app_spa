import React, { Component } from "react";
import classes from "./App.module.scss";
import { Cards, Chart, CountryPicker } from "./components/imports.js";
import { fetchData } from "./api/index.js";

export default class App extends Component {
  state = {
    data: {},
    country: "",
  };

  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({ data: fetchedData, country: "Global" });
  }

  handleCountryChange = async (country) => {
    if (country === "Global") {
      const fetchedData = await fetchData();
      this.setState({ data: fetchedData, country: country });
    } else {
      const fetchedData = await fetchData(country);
      this.setState({ data: fetchedData, country: country });
    }
  };

  render() {
    const { data, country } = this.state;

    return (
      <div className={classes.container}>
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} />
      </div>
    );
  }
}

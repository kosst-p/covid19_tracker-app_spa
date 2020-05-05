import React, { useState, useEffect } from "react";
import { NativeSelect, FormControl } from "@material-ui/core";
import { fetchCountriesData } from "../../api";

const CountryPicker = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fecthApi = async () => {
      setCountries(await fetchCountriesData());
    };
    fecthApi();
  }, []);
  console.log(countries);

  return (
    <FormControl>
      <NativeSelect>
        <option value="Global">Global</option>
        {countries.map((country, index) => {
          return (
            <option key={index} value={country.name}>
              {country.name}
            </option>
          );
        })}
      </NativeSelect>
    </FormControl>
  );
};

export default CountryPicker;

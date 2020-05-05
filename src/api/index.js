import Axios from "axios";

const url = "https://covid19.mathdro.id/api";

export const fetchData = async () => {
  try {
    const {
      data: { confirmed, recovered, deaths, lastUpdate },
    } = await Axios.get(url);
    return { confirmed, recovered, deaths, lastUpdate };
  } catch (error) {
    console.log(error);
  }
};

export const fetchDailyData = async () => {
  try {
    const { data } = await Axios.get(`${url}/daily`);

    // прошлись по массиву и с помощью map() вернули новый массив с нужными полями
    const modifiedData = data.map((dailyData) => {
      return {
        confirmed: dailyData.confirmed.total,
        deaths: dailyData.deaths.total,
        date: dailyData.reportDate,
      };
    });

    return modifiedData;
  } catch (error) {
    console.log(error);
  }
};

export const fetchCountriesData = async () => {
  try {
    const {
      data: { countries },
    } = await Axios.get(`${url}/countries`);
    const modifiedData = countries.map((country) => {
      return {
        name: country.name,
      };
    });
    return modifiedData;
  } catch (error) {
    console.log(error);
  }
};

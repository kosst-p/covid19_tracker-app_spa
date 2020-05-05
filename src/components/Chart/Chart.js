import React, { useEffect, useState } from "react";
import { fetchDailyData } from "../../api/index";
import { Line, Bar } from "react-chartjs-2";
import classes from "./Chart.module.scss";

const Chart = () => {
  const [dailyData, setDailyData] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setDailyData(await fetchDailyData());
    };
    fetchAPI();
  }, []);

  console.log(dailyData);

  const lineChart = dailyData.length ? (
    <Line
      data={{
        labels: dailyData.map(({ date }) => date), // расположение даты по оси Х
        // построение графиков за счет приходящих данных
        datasets: [
          {
            label: "Infected", // название
            data: dailyData.map(({ confirmed }) => confirmed), // выборка по ключу confirmed
            borderColor: "#3333ff", // цвет линий
            fill: true,
          },
          {
            label: "Deaths", // название
            data: dailyData.map(({ deaths }) => deaths), // выборка по ключу deaths
            borderColor: "#ff0000", // цвет линий
            backgroundColor: "rgba(255,0,0, .5)",
            fill: true,
          },
        ],
      }}
    />
  ) : null;

  return <div className={classes.container}>{lineChart}</div>;
};

export default Chart;

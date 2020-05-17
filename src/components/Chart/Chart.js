import React, { useEffect, useState } from "react";
import { fetchDailyData } from "../../api/index";
import { Line, Bar } from "react-chartjs-2";
import classes from "./Chart.module.scss";

const Chart = ({ data: { confirmed, recovered, deaths }, country }) => {
  const [dailyData, setDailyData] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setDailyData(await fetchDailyData());
    };
    fetchAPI();
  }, []);

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

  const barChart = confirmed ? (
    <Bar
      data={{
        labels: ["Infected", "Recovered", "Deaths"], // расположение меток по оси Х
        datasets: [
          {
            label: "People",
            backgroundColor: [
              // метки соответствуют этим цветам
              "rgba(0, 0, 255, 0.5)",
              "rgba(0, 255, 0, 0.5)",
              "rgba(255, 0, 0, 0.5)",
            ],
            data: [
              // метки соответствуют этим данным
              confirmed.value,
              recovered.value,
              deaths.value,
            ],
          },
        ],
      }}
      options={{
        legend: { display: false },
        title: { display: true, text: `Current state  in ${country}` },
      }}
    />
  ) : null;

  return (
    <div className={classes.container}>
      {country === "Global" ? lineChart : barChart}
    </div>
  );
};

export default Chart;

import React, { useEffect, useState } from "react";
import { fetchDailyData } from "../../api/index";
import { Line, Bar } from "react-chartjs-2";

const Chart = () => {
  const [dailyData, setDailyData] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setDailyData(await fetchDailyData());
    };
    fetchAPI();
  }, []);

  console.log(dailyData);

  // const lineChart = dailyData[0] ? (
  //   <Line
  //     data={{
  //       labels: dailyData(({ date }) => date),
  //       datasets: [{}, {}],
  //     }}
  //   />
  // ) : null;

  return <h1>Chart</h1>;
};

export default Chart;

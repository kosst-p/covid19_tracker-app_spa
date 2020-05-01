import Axios from "axios";

const url = "https://covid19.mathdro.id/api";

export const fetchData = async () => {
  try {
    const {
      data: { confirmed, recovered, deaths, lastUpdate },
    } = await Axios.get(url);
    return { confirmed, recovered, deaths, lastUpdate };
  } catch (error) {}
};

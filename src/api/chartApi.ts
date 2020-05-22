import axios from "../interceptors/keyInterceptor";

const restURL = "https://fidelity-investments.p.rapidapi.com/quotes/get-chart";

export const getChart = ({symbol, startDate, endDate}): Promise<any> =>
  axios.get(`${restURL}?symbol=${symbol}&startDate=${startDate}&endDate=${endDate}`);

export default getChart;
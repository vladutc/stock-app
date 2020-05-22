import React, { useContext, useEffect, useState } from "react";
import '../../../node_modules/react-vis/dist/style.css';
import { XYPlot, VerticalGridLines, HorizontalGridLines, XAxis, YAxis, LineSeries } from "react-vis";
import { FilterContext } from "../../utils/FilterManager";
import { getChart } from "../../api/chartApi";
import moment from 'moment';

const Chart = () => {
  const [data, setData] = useState({ open: [{x:'', y:''}], close: [{x:'', y:''}], high: [{x:'', y:''}], low: [{x:'', y:''}] });
  const { symbol, dates, validDates } = useContext(FilterContext);
  useEffect(() => {
    if (symbol && validDates) {
      console.log(symbol, dates, validDates);
     fetchData();
    }
  }, [symbol, Object.values(dates), validDates]);

  const fetchData = () => {
    const { startDate, endDate } = dates;
    const params = {
      symbol: symbol,
      startDate: moment(startDate).format('yyyy/MM/DD-HH:mm:ss'),
      endDate: moment(endDate).format('yyyy/MM/DD-HH:mm:ss')
    };
    getChart(params).then(({ data }) => {
      const parser = new DOMParser();
      const xml = parser.parseFromString(data, 'text/xml');
      const timestamps = xml.querySelector('TIMESTAMPS')?.childNodes[0]?.nodeValue?.split(' ') || [];
      const open = xml.querySelector('OPEN')?.childNodes[0]?.nodeValue?.split(' ') || [];
      const close = xml.querySelector('CLOSE')?.childNodes[0]?.nodeValue?.split(' ') || [];
      const high = xml.querySelector('HIGH')?.childNodes[0]?.nodeValue?.split(' ') || [];
      const low = xml.querySelector('LOW')?.childNodes[0]?.nodeValue?.split(' ') || [];
      const openGraph = timestamps.map((timestamp, index) => ({ x: timestamp, y: open[index] }));
      const closeGraph = timestamps.map((timestamp, index) => ({ x: timestamp, y: close[index] }));
      const highGraph = timestamps.map((timestamp, index) => ({ x: timestamp, y: high[index] }));
      const lowGraph = timestamps.map((timestamp, index) => ({ x: timestamp, y: low[index] }));
      setData(state => ({...state, open: openGraph, close: closeGraph, high: highGraph, low: lowGraph }));
    });
  }

  return (<XYPlot height={600} width={900}>
    <VerticalGridLines />
    <HorizontalGridLines />
    <XAxis />
    <YAxis />
    <LineSeries data={data.open} />
    <LineSeries data={data.close} />
    <LineSeries data={data.high} />
    <LineSeries data={data.low} />
  </XYPlot>)
}

export default Chart;
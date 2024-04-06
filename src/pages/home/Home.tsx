import { Users } from "../users/Users";
import TopBox from "../../components/topBox/TopBox";
import "./home.scss";
import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';

const chartSetting = {
  xAxis: [
    {
      label: 'Gainers',
    },
  ],
  width: 320,
  height: 400,
};
const dataset = [
  {
    london: 59,
    paris: 57,
    newYork: 86,
    seoul: 21,
    month: 'Jan',
  },
  {
    london: 50,
    paris: 52,
    newYork: 78,
    seoul: 28,
    month: 'Fev',
  },
  {
    london: 47,
    paris: 53,
    newYork: 106,
    seoul: 41,
    month: 'Mar',
  },
  {
    london: 54,
    paris: 56,
    newYork: 92,
    seoul: 73,
    month: 'Apr',
  },
  {
    london: 57,
    paris: 69,
    newYork: 92,
    seoul: 99,
    month: 'May',
  },
 
];

const valueFormatter = (value: number | null) => `${value}mm`;

export const Home = () => {
  return (
    <>
      <Users />
    <div className="home">
      <div className="box box1">
      <BarChart
      dataset={dataset}
      yAxis={[{ scaleType: 'band', dataKey: 'month' }]}
      series={[{ dataKey: 'seoul', label: 'Top Five Gainers', valueFormatter }]}
      layout="horizontal"
      {...chartSetting}
    />
      </div>
      <div className="box box1">
      <BarChart
      dataset={dataset}
      yAxis={[{ scaleType: 'band', dataKey: 'month' }]}
      series={[{ dataKey: 'seoul', label: 'Top Five Losers', valueFormatter }]}
      layout="horizontal"
      {...chartSetting}
    />
      </div>
      <div className="box box1">
      <BarChart
      dataset={dataset}
      yAxis={[{ scaleType: 'band', dataKey: 'month' }]}
      series={[{ dataKey: 'seoul', label: 'Most Traded', valueFormatter }]}
      layout="horizontal"
      {...chartSetting}
    />
      </div>

    </div>
    </>

  );
};

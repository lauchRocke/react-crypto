import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { dateFormula } from './HistoryTime';

function FetchHistoryItems({ prices }) {
  let [parsed, setParsed] = useState(null);
  useEffect(() => {
    let obj = prices.map((item) => {
      let [date, price] = item;
      date = new Date(date).toLocaleDateString();
      return { date, price };
    });
    setParsed(obj);
  }, [prices]);
  // console.log(prices[0][0])
  let getDate = dateFormula(prices[0][0]);
  console.log(prices);
  return (
    <div>
      <h2>{}</h2>

      {parsed && (
        <LineChart width={1000} height={400} data={parsed}>
          <XAxis dataKey="date" />
          <YAxis />
          <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
          <Line type="monotone" dataKey="price" stroke="#82ca9d" />
        </LineChart>
      )}
    </div>
  );
}

FetchHistoryItems.prototype = {
  fetchHistoryCoin: PropTypes.object.isRequired,
};

export default FetchHistoryItems;

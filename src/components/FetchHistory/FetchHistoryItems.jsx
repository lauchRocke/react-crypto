import React from 'react';
import PropTypes from 'prop-types';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { dateFormula } from './HistoryTime';


function FetchHistoryItems({ fetchHistoryCoin: { prices }}) {
  // console.log(prices[0][0])
  let getDate = dateFormula(prices[0][0])
  console.log(getDate)
  return (
    <div>
      <h2>{}</h2>

      <LineChart width={400} height={400} data={prices}>
        <Line type="monotone" dataKey={prices[0]} stroke="#8884d8" />
      </LineChart>
      
    </div>
  );
}

FetchHistoryItems.prototype = {
  fetchHistoryCoin: PropTypes.object.isRequired,
};

export default FetchHistoryItems;

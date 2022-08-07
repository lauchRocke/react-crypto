import React from 'react';
import PropTypes from 'prop-types';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const dateFormula = (getDate) => {

  const unixTime = getDate;
  const date = new Date(unixTime);
  // console.log(date.toLocaleDateString("en-US"));
  const dateTime = date.toLocaleDateString("en-US");
  // console.log(dateTime)
  return dateTime;
}

function FetchHistoryItems({ fetchHistoryCoin: { prices }}) {
  // console.log(prices[0][0])
const dateOfYear = dateFormula(prices[0][0]);
// console.log(dateOfYear);
// const unixTime2 =1392595200000;
// const date2 = new Date(unixTime2);
// // console.log(date.toLocaleDateString("en-US"));
// const dateTime2 = date2.toLocaleDateString("en-US");
// console.log(dateTime2)
// function getPrices(){
  let x = []
  let y = []
  let maxPrice = Object.keys(prices);
  // console.log(maxPrice.length)
  for(let i =0; i < maxPrice.length; i++){
    
//     const unixTime = prices[i][0];
// const date = new Date(unixTime);
// // console.log(date.toLocaleDateString("en-US"));
// const dateTime = date.toLocaleDateString("en-US");
    x.push(prices[i][0])
    y.push(prices[i][1])
  }
//}

const xMax = Math.max(...x);
const xMin = Math.min(...x);
const yMax = Math.max(...y);
const yMin = Math.min(...y);
console.log(dateFormula(xMin))
console.log(dateFormula(xMax))
console.log(yMax)
console.log(yMin)
// console.log(x, y)

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

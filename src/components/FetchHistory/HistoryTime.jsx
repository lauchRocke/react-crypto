import React from 'react'

    
export const dateFormula = (getDate) => {

    const unixTime = getDate;
    const date = new Date(unixTime);
    // console.log(date.toLocaleDateString("en-US"));
    const dateTime = date.toLocaleDateString("en-US");
    // console.log(dateTime)
    return dateTime;
  }
  
export const maxTimeMinTime = (prices) => { 

    // console.log(prices[0][0])
  
    let x = []
    let y = []
    let maxPrice = Object.keys(prices);
    // console.log(maxPrice.length)
    for(let i =0; i < maxPrice.length; i++){
  
      x.push(prices[i][0])
      y.push(prices[i][1])
    }
  
  const arrMaxMin = []
  const xMax = Math.max(...x);
  const xMin = Math.min(...x);
  const yMax = Math.max(...y);
  const yMin = Math.min(...y);
  console.log(dateFormula(xMin))
  console.log(dateFormula(xMax))
  console.log(yMax)
  console.log(yMin)
 return arrMaxMin.push(xMax, xMin)
}

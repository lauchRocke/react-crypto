import { useContext, useState } from 'react';
import CoinContext from '../../../context/CoinContext';
import { CardContent, Button, Typography } from '@mui/material';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { LineChart, Line } from 'recharts';

function CryptoResult() {
  const {
    searchResult: { id, symbol, market_data, image, name,tickers },
  } = useContext(CoinContext);


  //console.log(searchResult, "search result")
  return (
    <>
      <h1>{name}</h1>
      <LineChart width={400} height={400} data={tickers.filter(i=>i.target==='USD')}>
        <Line type="monotone" dataKey="last" stroke="#8884d8" />
      </LineChart>
    </>
  );
}

export default CryptoResult;

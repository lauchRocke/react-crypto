import { useState, useContext } from 'react';
import { Box, Button } from '@mui/material/';
import { reUsable } from '../../../context/CoinActions';
import CoinContext from '../../../context/CoinContext';

function CoinReusable({ coinKey }) {
  const { dispatch } = useContext(CoinContext);

  const handleOrder = async (e) => {
    e.preventDefault();

    const coin = await reUsable(coinKey);
    // console.log({ coin, coinKey });
    dispatch({ type: 'GET_COIN_parsed', payload: coin });
  };

  return (
    <div >
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
        onSubmit={handleOrder}
      >
        <Button
          type="submit"
          onChange={handleOrder}
          variant="contained"
          sx={{ m: 2 }}
        >
          {coinKey}
        </Button>
      </Box>
    </div>
  );
}

export default CoinReusable;

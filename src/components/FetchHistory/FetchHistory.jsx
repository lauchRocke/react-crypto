import { useState, useContext } from 'react';
import { Box, Button } from '@mui/material/';
import { fetchMarket } from '../../context/CoinActions';
import CoinContext from '../../context/CoinContext';

function FetchHistory() {
  const { dispatch } = useContext(CoinContext);

  const handleFetch = async (e) => {
    e.preventDefault();
    const fetchHistoryCoin = await fetchMarket();
    // console.log({ fetchHistoryCoin})
    dispatch({ type: 'FETCH_HISTORY', payload: fetchHistoryCoin });
  };
  return (
    <div>
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
        onSubmit={handleFetch}
      >
        <Button
          type="submit"
          onChange={handleFetch}
          variant="contained"
          sx={{ m: 2 }}
        >
          History
        </Button>
      </Box>
    </div>
  );
}

export default FetchHistory;

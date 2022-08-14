import React from 'react';
import { Box, Button } from '@mui/material';
import { listCoins } from '../../context/CoinActions';
import CoinContext from '../../context/CoinContext';
import { useContext } from 'react';

function DisplayCoin({ coinList }) {
  const { dispatch } = useContext(CoinContext);

  const handleList = async (e) => {
    e.preventDefault();
    const coin = await listCoins();
    dispatch({ type: 'GET_LIST_COINS', payload: coin });
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
        onSubmit={handleList}
      >
        <Button
          type="submit"
          onChange={handleList}
          variant="contained"
          sx={{ m: 2 }}
        >
          Display
        </Button>
      </Box>
    </div>
  );
}

export default DisplayCoin;

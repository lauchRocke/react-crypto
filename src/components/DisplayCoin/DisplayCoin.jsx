import React, { useContext, useState, useEffect } from 'react';
import { Box, Button } from '@mui/material';
import { listCoins } from '../../context/CoinActions';
import CoinContext from '../../context/CoinContext';

function DisplayCoin({ coinList }) {
  const { dispatch } = useContext(CoinContext);
  let [list, setList] = useState([]);

  const handleList = async (e) => {
    if(e){
    e.preventDefault();
    }
    const coin = await listCoins();
    setList(coin);
    dispatch({ type: 'GET_LIST_COINS', payload: coin });
  };

  useEffect(() => {
    handleList();
  }, []);
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
        {/* {JSON.stringify(list)} */}
      </Box>
    </div>
  );
}

export default DisplayCoin;

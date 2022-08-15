import React, { useContext, useState, useEffect } from 'react';
import { Box, Button } from '@mui/material';
import { listCoins, marketData } from '../../context/CoinActions';
import CoinContext from '../../context/CoinContext';

function DisplayCoin({ coinList }) {
  const { dispatch } = useContext(CoinContext);
  let [list, setList] = useState([]);
  const [marketlist, setMarketList] = useState([])

  const handleList = async (e) => {
    if(e){
    e.preventDefault();
    }
    const coin = await listCoins();
    setList(coin.data.length);
    dispatch({ type: 'GET_LIST_COINS', payload: coin });
    const coinMarket = await marketData();
    setMarketList(coinMarket.data)
    dispatch({type: 'GET_MARKET', payload: coinMarket})
  };

  useEffect(() => {
    handleList();
  }, []);
const howManyCoins = JSON.stringify(list)
const howManyMarket = JSON.stringify(marketlist)
let dataPrice = howManyMarket
console.log(dataPrice)

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
        Coins : {howManyCoins}
         Market: {howManyMarket}
      </Box>
    </div>
  );
}

export default DisplayCoin;

import React, { useContext, useState, useEffect } from 'react';
import { Box, Button } from '@mui/material';
import { listCoins, marketData } from '../../context/CoinActions';
import CoinContext from '../../context/CoinContext';
import DisplayCoinItem from './DisplayCoinItem';
function DisplayCoin({ coinList }) {
  const { dispatch } = useContext(CoinContext);
  let [list, setList] = useState([]);
  let [marginLeft, setMarginLeft] = useState(0);
  const [marketlist, setMarketList] = useState([]);

  const handleList = async (e) => {
    if (e) {
      e.preventDefault();
    }
    const coin = await listCoins();
    setList(coin.data);
    
    dispatch({ type: 'GET_LIST_COINS', payload: coin });
    const coinMarket = await marketData();
    setMarketList(coinMarket.data);
    dispatch({ type: 'GET_MARKET', payload: coinMarket });
  };

  useEffect(() => {
    handleList();
  }, []);

  const howManyCoins = JSON.stringify(list);
  const howManyMarket = JSON.stringify(marketlist);
  // let dataPrice = marketlist.data;
  // const changePriceMarket = dataPrice.map((x) => x.current_price)
  // const arr = []
  // console.log( marketlist[0])
  // for(let i =1; i <  100; i++){
  //   arr.push( marketlist[i].market_cap)
  // }
  // console.log(arr)
  // const initialValue = 0;
  // const sumWithInitial = arr.reduce(
  //   (previousValue, currentValue) => previousValue + currentValue,
  //   initialValue
  // );
  
  // console.log(sumWithInitial);
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
      Coins: {list.length}
        {"\n"}
        Market Cap: {howManyMarket.length} 
        {/* {<div style={{ width: '100vw', overflow: 'hidden' }}> }
          <div
            style={{
              display: 'flex',
              width: '100%',
              marginLeft: marginLeft + 'px',
            }}
          >
            Coins :{' '}
            {marketlist.map((coin) => (
              <DisplayCoinItem coin={coin} />
            ))}
          </div> */}
          {/* <button onClick={() => setMarginLeft(marginLeft - 50)}>{'<'}</button>
          <button onClick={() => setMarginLeft(marginLeft + 50)}>{'>'}</button> */}
        
      </Box>
    </div>
  );
}

export default DisplayCoin;

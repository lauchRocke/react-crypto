import React from 'react';
import CoinContext from '../../../context/CoinContext';
import { searchCoin } from '../../../context/CoinActions';
import CryptoResult from '../CoinSearch/CryptoResult';
import { useParams } from 'react-router-dom';

function Crypto() {
  let { name } = useParams();
  const { searchResult, coin, dispatch } = React.useContext(CoinContext);
  React.useEffect( () => {
   (async ()=>{
    if (!searchResult) {
      dispatch({ type: 'SET_LOADING' });
      const coin = await searchCoin(name);
      //console.log(coin);
      dispatch({ type: 'GET_COIN', payload: coin });
    }
  })()
  }, []);
  return searchResult && <CryptoResult />;
}

export default Crypto;

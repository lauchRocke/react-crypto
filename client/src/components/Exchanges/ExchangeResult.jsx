import { useContext, useEffect } from 'react';
import {exchangesData } from '../../context/CoinActions'
import CoinContext from '../../context/CoinContext'
import ExchangesItems from './ExchangesItems';

function ExchangeResult() {

    const { exchangesCoin } = useContext(CoinContext)
console.log(exchangesCoin)
  return (
    <div>
        
        <ExchangesItems coins={exchangesCoin}/>
    </div>
  )
}

export default ExchangeResult
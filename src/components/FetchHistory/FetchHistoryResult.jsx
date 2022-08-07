import { useContext, useState } from 'react';
import FetchHistoryItems from './FetchHistoryItems';
import CoinContext from '../../context/CoinContext';



function FetchHistoryResult() {
    const { fetchHistoryCoin, dispatch } = useContext(CoinContext)
    // console.log(fetchHistoryCoin)
  return (
    <div>
        <FetchHistoryItems fetchHistoryCoin={fetchHistoryCoin}  />
    </div>
  )
}

export default FetchHistoryResult
import { useContext, useState } from 'react';
import FetchHistoryItems from './FetchHistoryItems';
import CoinContext from '../../context/CoinContext';

function FetchHistoryResult() {
  const { fetchHistoryCoin, dispatch } = useContext(CoinContext);
  // console.log(34, fetchHistoryCoin);
  return (
    <div>
      <FetchHistoryItems prices={fetchHistoryCoin.prices} />
    </div>
  );
}

export default FetchHistoryResult;

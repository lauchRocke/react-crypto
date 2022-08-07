import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

import CoinResult from '../coins/CoinSearch/CoinResult';
import CoinContext from '../../context/CoinContext';
import CoinResuableResult from '../coins/CoinResuable/CoinResuableResult';
import FetchHistoryResult from '../FetchHistory/FetchHistoryResult';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(3),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

function Coin() {
    const { searchResult, coin, dispatch, fetchHistoryCoin } = React.useContext(CoinContext);
   // console.log(45,fetchHistoryCoin)
  return (
    <>


      <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
        <Box gridColumn="span 2">
        </Box>

        <Box gridColumn="span 8" >
          {searchResult && (
            <Item>
              <CoinResult />
            </Item>
          )}
          {coin.length ? (
            <Item>
              <CoinResuableResult />
            </Item>
          ) : null}
          {fetchHistoryCoin ? (
            <Item>
              <FetchHistoryResult />
            </Item>
          ) : null}

        </Box>
      </Box>

    </>
  )
}

export default Coin
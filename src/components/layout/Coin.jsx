import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';
import CoinSearch from '../coins/CoinSearch/CoinSearch';
import CoinResult from '../coins/CoinSearch/CoinResult';
import CoinContext from '../../context/CoinContext';


import BasicTabs from './Tab';
import Navbar from './Navbar';
import { Link, Outlet } from 'react-router-dom'
import CoinResuableResult from '../coins/CoinResuable/CoinResuableResult';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(3),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

function Coin() {
    const { searchResult, coin, dispatch } = React.useContext(CoinContext);
  return (
    <>


      <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
        <Box gridColumn="span 4">
          <Item>
            <CoinSearch />
            <Button
              onClick={() => dispatch({ type: 'CLEAR_COINS', payload: coin })}
            >
              Clear
            </Button>
          </Item>
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
        </Box>
      </Box>

    </>
  )
}

export default Coin
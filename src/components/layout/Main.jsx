import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Button, Tab } from '@mui/material';
import CoinSearch from '../coins/CoinSearch/CoinSearch';
import CoinResult from '../coins/CoinSearch/CoinResult';
import CoinContext from '../../context/CoinContext';


import BasicTabs from './Tab';
import Navbar from './Navbar';
import { Link, Outlet } from 'react-router-dom'
import CoinResuableResult from '../coins/CoinResuable/CoinResuableResult';
import Coin from './Coin';
import Divider from '@mui/material/Divider';
import Tabs from './Tabs';
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(3),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function Main() {
  const { searchResult, coin, dispatch } = React.useContext(CoinContext);

  return (
    <>
      <Outlet />
      <Tabs />
      <Divider />
      <BasicTabs />
      <Coin />
    </>
  );
}

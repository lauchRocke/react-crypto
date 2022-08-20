import React from 'react'
import PropTypes from 'prop-types';
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  CardActionArea,
} from '@mui/material';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';


function DisplayCoinItem({ coin: { id, price, name}}) {

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      }));
  return (
    <Box sx={{ m: 2 }} >
   <h1>{name}</h1>
   <h2>{price}</h2>
  </Box>
  )
}
DisplayCoinItem.propTypes = { 
    coinList : PropTypes.object.isRequired
}
export default DisplayCoinItem
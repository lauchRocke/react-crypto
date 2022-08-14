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


function DisplayCoinItem({ coinList: { id, symbol, name}}) {

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      }));
  return (
    <Box sx={{ m: 2 }} >
    <Grid
      container
      spacing={{ xs: 2, md: 3 }}
      columns={{ xs: 4, sm: 8, md: 12 }}
    >
      <Grid item xs={2} sm={4} md={4}>
        <Item>
          <CardContent>

            <Typography gutterBottom variant="h5" component="div">
              {name}
            </Typography>
          </CardContent>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {id}
            </Typography>
          </CardContent>

          <Typography>Symbol: {symbol}</Typography>
        </Item>
      </Grid>
    </Grid>
  </Box>
  )
}
DisplayCoinItem.propTypes = { 
    coinList : PropTypes.object.isRequired
}
export default DisplayCoinItem
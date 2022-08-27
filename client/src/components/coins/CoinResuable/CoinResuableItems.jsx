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
// import ComplexGrid from './ComplexGrid';

function CoinResuableItems({coins:{ image, id, symbol, current_price }}) {

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
console.log(id)
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
              <img
                component="img"
                style={{ width: '50px', height: '50px', margin: 'auto' }}
                alt="coin"
                src={image}
              />
              <Typography gutterBottom variant="h5" component="div">
                {symbol}
              </Typography>
            </CardContent>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {id}
              </Typography>
            </CardContent>
            <Typography variant="body2" size="small">
              Price : {current_price}
            </Typography>
            <Typography>Symbol: {symbol}</Typography>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}

CoinResuableItems.propType = {
  coin: PropTypes.object.isRequired,
};

export default CoinResuableItems;

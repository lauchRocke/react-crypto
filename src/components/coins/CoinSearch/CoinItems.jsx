import PropTypes from 'prop-types';
import {
  CardContent,
  Button,
  Typography,
} from '@mui/material';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
// import ComplexGrid from './ComplexGrid';

function CoinItems({ coins: { image, id, symbol, market_data } }) {

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
console.log(id);
  return (
    <Box sx={{ flexGrow: 1 }}>
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
                src={image.small}
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
            <Typography variant="body4" size="small">
              Price : ${market_data.current_price.usd}{' '}
            </Typography>
            <Typography>Symbol: {symbol} </Typography>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}

CoinItems.propType = {
  coin: PropTypes.object.isRequired,
};

export default CoinItems;

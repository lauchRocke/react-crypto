
import { useState, useContext } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { searchCoin } from '../../../context/CoinActions';
import CoinContext from '../../../context/CoinContext';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';

import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton';

export default function CoinSearch() {
  const [value, setValue] = useState('');

 const { dispatch } = useContext(CoinContext);

  const handleChange = (event) => {
    setValue(event.target.value);
   
  };

  const handleSubmit = async (e) =>{

    e.preventDefault();
    if(value === ''){
        return;
    }else{
        dispatch({ type: 'SET_LOADING'})
        const coin = await searchCoin(value)
        // console.log(coin);
        dispatch({ type: 'GET_COIN', payload: coin});
        setValue('');
    }
  }

  return (

    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit}
    >
      <div>
        <TextField
          hiddenLabel
          id="filled-hidden-label-normal"
          defaultValue="Normal"
          variant="filled"
          size="small"
          value={value}
          onChange={handleChange}
          placeholder="Search…"
          inputProps={{ 'aria-label': 'search' }}
        />
     <IconButton type="submit" sx={{ p: '15px' }} aria-label="search"  onChange={handleChange} >
        <SearchIcon />
      </IconButton>
    </div>
      {/* <Button type='submit'variant='contained'>Go</Button> */}
    </Box>
  
  )
}

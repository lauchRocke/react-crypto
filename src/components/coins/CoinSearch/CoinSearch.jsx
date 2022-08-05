
import { useState, useContext } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { searchCoin } from '../../../context/CoinActions';
import CoinContext from '../../../context/CoinContext';

import Button from '@mui/material/Button'

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
        console.log(coin);
        dispatch({ type: 'GET_COIN', payload: coin});
        setValue('');
    }
  }

  return (
    <div  style={{display:"inline-block"}}>
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
          id="outlined-multiline-flexible"
          label="Search"
          value={value}
          onChange={handleChange}
         
        />

    </div>
      <Button type='submit' onChange={handleChange} variant='contained'>Go</Button>
    </Box>
     
   
    </div>
  );
}

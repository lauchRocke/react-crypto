import { useContext, useState } from 'react';
import { Box, Button } from '@mui/material/';
import { exchangesData } from '../../context/CoinActions';
import CoinContext from '../../context/CoinContext';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import ExchangesItems from './ExchangesItems';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function TabExchange() {
  const [value, setValue] = useState(1);
  let [data, setData] = useState(null);
  const { dispatch } = useContext(CoinContext);

  const handleExchange = async (e) => {
    e.preventDefault();
    const exchangeCoin = await exchangesData();
    setData(exchangeCoin);
    console.log(exchangeCoin)
    dispatch({ type: 'GET_EXCHANGES', payload: exchangeCoin });
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          centered
        >
          <Tab label="Item One" {...a11yProps(0)} />
          <Tab label="Item Two" {...a11yProps(1)} />
          <Tab label="Item Three" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0} className="grid-container">
        <Box
          component="form"
          sx={{
            '& .MuiTextField-root': { m: 1, width: '25ch' },
          }}
          noValidate
          autoComplete="off"
          onSubmit={handleExchange}
        >
          <Button
            type="submit"
            onChange={handleExchange}
            variant="contained"
            sx={{ m: 2 }}
          >
            Exchange
          </Button>
          {JSON.stringify(data)}
        </Box>
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Second
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
    </Box>
  );
}

import { useContext, useState } from 'react'
import { Box, Button } from '@mui/material/';
import { exchangesData } from '../../context/CoinActions'
import CoinContext from '../../context/CoinContext';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TablePagination from '@mui/material/TablePagination';

function ExchangesItems({ exchangesCoin: { id, name, trust_score, trust_score_rank, image, url }}) {
    const { coin, loading, dispatch } = useContext(CoinContext);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    // console.log(coin);
  
    const handleClick = async (coinName) => {
      dispatch({ type: 'SET_LOADING' });
    //   const coin = await searchCoin(coinName);
    //   console.log(coin);
    //   dispatch({ type: 'GET_COIN', payload: coin });
    };
    const handleChangePage = (event, newPage) => {
      setPage(newPage);
    };
  
    const handleChangeRowsPerPage = (event) => {
      setRowsPerPage(+event.target.value);
      setPage(0);
    };
  
  return (
    <div>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="right">Symbol&nbsp;</TableCell>
            <TableCell align="right">Market Cap Rank</TableCell>
            <TableCell align="right">Low 24hr</TableCell>
            <TableCell align="right">High 24hr</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {coin
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((coins, i) => (
              // <CoinResuableItems key={coins.id} coins={coins} />

              <TableRow
                key={i}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                onClick={() => handleClick(coins.id)}
              >
                <TableCell component="th" scope="row">
                  {coins.id}
                </TableCell>
                <TableCell align="right">${coins.current_price}</TableCell>
                <TableCell align="right">{coins.symbol}</TableCell>
                <TableCell align="right">{coins.market_cap_rank}</TableCell>
                <TableCell align="right">${coins.low_24h}</TableCell>
                <TableCell align="right">${coins.high_24h}</TableCell>
              </TableRow>
            ))}
        </TableBody>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={coin.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Table>
    </TableContainer>
  </div>
  )
}

export default ExchangesItems
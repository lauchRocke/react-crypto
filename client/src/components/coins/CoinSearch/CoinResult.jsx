import { useContext, useEffect } from 'react';
import CoinItems from './CoinItems';
import CoinContext from '../../../context/CoinContext';
import { Link, useParams } from 'react-router-dom'
import { searchCoin } from '../../../context/CoinActions';
function CoinResult(){
    const { searchResult, loading, dispatch } = useContext(CoinContext)
    
  let { id } = useParams();
  useEffect( () => {
    (async ()=>{
     if (!searchResult) {
       dispatch({ type: 'SET_LOADING' });
       const coin = await searchCoin(id);
       //console.log(coin);
       dispatch({ type: 'GET_COIN', payload: coin });
     }
   })()
   }, []);
    // console.log(searchResult, "search result")
    return (
      
      <Link to={`/crypto/${searchResult.id}`} style={{textDecoration: 'none'}} >
            <CoinItems  coins={searchResult} />
        </Link>
    )
}

export default CoinResult;
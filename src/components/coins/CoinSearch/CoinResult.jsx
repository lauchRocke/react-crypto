import { useContext } from 'react';
import CoinItems from './CoinItems';
import CoinContext from '../../../context/CoinContext';
import { Link } from 'react-router-dom'

function CoinResult(){
    const { searchResult, loading } = useContext(CoinContext)
    console.log(searchResult, "search result")
    return (
      
      <Link to={`/crypto/${searchResult.id}`} style={{textDecoration: 'none'}} >
            <CoinItems  coins={searchResult} />
        </Link>
    )
}

export default CoinResult;
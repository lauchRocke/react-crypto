import {useContext} from 'react'
import CoinContext from '../../context/CoinContext'
import DisplayCoinItem from './DisplayCoinItem'

function DisplayCoinResult() {
    const { coinList } = useContext(CoinContext)

  return (
    <div>
        <DisplayCoinItem coins={coinList}/>
    </div>
  )
}

export default DisplayCoinResult
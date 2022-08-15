import { createContext, useReducer } from 'react';
import { CoinReducer } from './CoinReducer';

const CoinContext = createContext();

export const CoinProvider = ({ children }) => {
  const initialState = {
    coin: [],
    fetchHistoryCoin: null,
    searchResult: null,
    coinList: null
  };
  const [state, dispatch] = useReducer(CoinReducer, initialState);
  // console.log(state)

  return (
    <CoinContext.Provider
      value={{
        ...state,
        dispatch,
      }}
    >
      {children}
    </CoinContext.Provider>
  );
};

export default CoinContext;

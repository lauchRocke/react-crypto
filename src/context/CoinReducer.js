/* eslint-disable import/no-anonymous-default-export */

import { getNativeSelectUtilityClasses } from "@mui/material";

export const CoinReducer = (state, action) => {
  switch (action.type) {
    case 'GET_COIN':
      return {
        ...state,
        searchResult: action.payload,
        coin: [],
        fetchHistoryCoin: [],
        loading: false,
        exchangesCoin: []
      };
    case 'SET_LOADING':
      return {
        ...state,
        loading: true,
      };
    case 'CLEAR_COINS':
      return {
        ...state,
        coin: [],
        fetchHistoryCoin: [],
        searchResult: null,
        exchangesCoin: []
      };
      case 'GET_COIN_parsed':
        return {
          ...state,
          coin: action.payload,
          fetchHistoryCoin: [],
          searchResult: null,
          exchangesCoin: []
      };
     case 'FETCH_HISTORY':
      return {
        ...state,
        coin: [],
        searchResult : null,
        fetchHistoryCoin: action.payload,
        exchangesCoin: []
      };
      case 'GET_EXCHANGES':
        return {
        ...state,
        coin: [],
        searchResult: null,
        fetchHistoryCoin : [],
        exchangesCoin: []
        };
    default:
      return state;
  }
};

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
      };
      case 'GET_COIN_parsed':
        return {
          ...state,
          coin: action.payload,
          fetchHistoryCoin: [],
          searchResult: null,
      };
     case 'FETCH_HISTORY':
      return {
        ...state,
        coin: [],
        searchResult : null,
        fetchHistoryCoin: action.payload
      };
    default:
      return state;
  }
};

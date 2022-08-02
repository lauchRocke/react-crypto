/* eslint-disable import/no-anonymous-default-export */

export const CoinReducer = (state, action) => {
  switch (action.type) {
    case 'GET_COIN':
      return {
        ...state,
        searchResult: action.payload,
        coin: [],
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
        searchResult: null,
      };
      case 'GET_COIN_parsed':
        
        return {
          ...state,
          coin: action.payload,
          searchResult: null,
      };
     

    default:
      return state;
  }
};

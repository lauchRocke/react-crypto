import CoinGecko from 'coingecko-api';

const CoinGeckoClient = new CoinGecko();

export const searchCoin = async (text) => {
  // const params = new URLSearchParams({
  //     text
  // })
  let response = await CoinGeckoClient.coins.fetch(`${text}`, {});
  // console.log(response.data)
  return response.data;
};

// list all coins
export const listCoins = async () => {
  let data = await CoinGeckoClient.coins.list();
  // console.log(data)
  return data
}
// market data
export const reUsable = async (key) => {
  // console.log(key);
  let res = await CoinGeckoClient.coins.markets({
    vs_currency: 'usd',
    order: CoinGecko.ORDER[key],
    per_page: 100,
    page: 1,
  });

  return res.data;
};
export const marketData = async () =>{
  let data = await CoinGeckoClient.coins.markets();
  // console.log(data)
  return data
}
// fetch history data
export const fetchMarket = async () => {
  try {
    let data = await CoinGeckoClient.coins.fetchMarketChartRange('bitcoin', {
      from: 1392577232,
      to: 1659852847,
    });
    console.log(data.data)
    return data.data
  } catch (error) {
    console.error()
  }
}

// exchanges data
export const exchangesData = async () =>{
  try {
    let data = await CoinGeckoClient.exchanges.all();
    // console.log(data.data)
    return data.data;
  } catch (error) {
    console.error(error)
  }
}


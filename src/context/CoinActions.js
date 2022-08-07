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
    console.log(data.data)
    return data.data;
  } catch (error) {
    console.error(error)
  }
}
import CoinGecko from 'coingecko-api';
// https://github.com/miscavage/CoinGecko-API
//2. Initiate the CoinGecko API Client
const CoinGeckoClient = new CoinGecko();

export const searchCoin = async (text) => {
  // const params = new URLSearchParams({
  //     text
  // })

  // let response = await CoinGeckoClient.coins.all();
  let response = await CoinGeckoClient.coins.fetch(`${text}`, {});
  // console.log(response.data)
  return response.data;
};

export const reUsable = async (key) => {
  console.log(key);
  let res = await CoinGeckoClient.coins.markets({
    vs_currency: 'usd',
    order: CoinGecko.ORDER[key],
    per_page: 100,
    page: 1,
  });

  return res.data;
};

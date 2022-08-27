import CoinReusable from './CoinResuable/CoinResuable';

import './OrderBy.css';

function OrderBy() {
  return (
    <div className="centerItem">
      {[
        'MARKET_CAP_ASC',
        'MARKET_CAP_DESC',
        'GECKO_DESC',
        'GECKO_ASC',
        'VOLUME_ASC',
        'VOLUME_DESC',
        'COIN_NAME_DESC',
        'COIN_NAME_ASC',
        'PRICE_ASC',
        'PRICE_DESC',
        'HOUR_24_DESC',
        'HOUR_24_ASC',
        'TRUST_SCORE_DESC',
      ].map((key) => (
        <CoinReusable coinKey={key}/>
      ))}
    </div>
  );
}

export default OrderBy;

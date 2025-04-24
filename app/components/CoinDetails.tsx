import React from 'react';
import Image from 'next/image';
interface Coins {
  id: string;
  symbol: string;
  name: string;
  image: {
    small: string;
  };
  market_cap_rank: number;
  market_data: {
    market_cap: {
      usd: number;
    };
    market_cap_change_percentage_24h: number;
    current_price: {
      usd: number;
    };
    price_change_percentage_24h: number;
    price_change_percentage_7d: number;
    price_change_percentage_30d: number;
    price_change_percentage_1y: number;
    low_24h: {
      usd: number;
    };
    high_24h: {
      usd: number;
    };
    total_supply: number;
    circulating_supply: number;
  };
  description: {
    en: string;
  };
}

interface CoinDetailsProps {
  coin: Coins;
}

const CoinDetails: React.FC<CoinDetailsProps> = ({ coin }) => {
  if (!coin) {
    return <div className="text-red-500">Coin data not available.</div>;
  }

  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 gap-6">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-100 py-6 rounded-3xl bg-sky-500">Details of {coin.name}</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 rounded-4xl bg-sky-500 py-6 px-4 text-white">
          <div className="flex flex-col gap-4">
            <div className="flex items-center ">
              <Image 
              src={coin.image.small}
               alt={coin.name} 
               className="w-16 h-16 mr-4"
                />
              <h4 className="text-xl font-semibold">
                {coin.name} ({coin.symbol.toUpperCase()})
              </h4>
            </div>
            <div>
              <h4 className="text-lg font-medium">
                Market Cap Rank:
                <span className="ml-2 font-normal">{coin.market_cap_rank}</span>
              </h4>
            </div>
            <div>
              <h4 className="text-lg font-medium">
                Market Cap:
                <span className="ml-2 font-normal">${coin.market_data.market_cap.usd.toLocaleString()}</span>
                <span className="ml-2 px-2 py-1 rounded bg-green-500 text-white text-sm">
                  {coin.market_data.market_cap_change_percentage_24h.toFixed(2)}%
                </span>
              </h4>
            </div>
            <div>
              <h4 className="text-lg font-medium">
                Current Price:
                <span className="ml-2 font-normal">${coin.market_data.current_price.usd.toLocaleString()}</span>
              </h4>
            </div>
          </div>

          <div>
            <div className="overflow-x-auto">
              <table className="min-w-full table-auto">
                <thead>
                  <tr className="bg-blue-700 border-b-2">
                    <th className="px-4 py-2 text-center text-white">24h</th>
                    <th className="px-4 py-2 text-center text-white">7d</th>
                    <th className="px-4 py-2 text-center text-white">30d</th>
                    <th className="px-4 py-2 text-center text-white">1y</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="px-4 py-2">{coin.market_data.price_change_percentage_24h.toFixed(2)}%</td>
                    <td className="px-4 py-2">{coin.market_data.price_change_percentage_7d.toFixed(2)}%</td>
                    <td className="px-4 py-2">{coin.market_data.price_change_percentage_30d.toFixed(2)}%</td>
                    <td className="px-4 py-2">{coin.market_data.price_change_percentage_1y.toFixed(2)}%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-sky-500 text-white rounded-4xl py-2">
          <div>
            <h4 className="text-lg font-medium">
              Low 24H:
              <span className="ml-2 font-normal">${coin.market_data.low_24h.usd.toLocaleString()}</span>
            </h4>
          </div>
          <div>
            <h4 className="text-lg font-medium">
              High 24H:
              <span className="ml-2 font-normal">${coin.market_data.high_24h.usd.toLocaleString()}</span>
            </h4>
          </div>
          <div>
            <h4 className="text-lg font-medium">
              Total Supply:
              <span className="ml-2 font-normal">{coin.market_data.total_supply.toLocaleString()}</span>
            </h4>
          </div>
          <div>
            <h4 className="text-lg font-medium">
              Circulating Supply:
              <span className="ml-2 font-normal">{coin.market_data.circulating_supply.toLocaleString()}</span>
            </h4>
          </div>
        </div>

        <div className='py-[7px] px-6 rounded-4xl bg-sky-500 '>
          <div className="text-gray-100" dangerouslySetInnerHTML={{ __html: coin.description.en }} />
        </div>
      </div>
    </div>
  );
};

export default CoinDetails;

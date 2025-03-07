import Link from "next/link";
import React from "react";

interface Coin {
  id: string;
  market_cap_rank: number;
  image: string;
  symbol: string;
  current_price: number;
  price_change_percentage_24h: number;
  total_volume: number;
  market_cap: number;
}

interface CoinsProps {
  data: Coin[];
}

const Coins: React.FC<CoinsProps> = ({ data }) => {
  return (
    <div>
      <div className="flex flex-col">
        <div className=" overflow-x-auto">
          <div className="min-w-full inline-block align-middle">
            <div className="overflow-hidden border rounded-lg border-gray-300">
              <table className=" min-w-full  rounded-xl">
                <thead>
                  <tr className="bg-gray-200">
                    <th
                      scope="col"
                      className="w-5 p-2 text-center text-sm leading-6 font-semibold text-gray-900 capitalize"
                    >
                      #
                    </th>
                    <th
                      scope="col"
                      className="p-5 text-center text-sm leading-6 font-semibold text-gray-900 capitalize"
                    >
                      Logo
                    </th>
                    <th
                      scope="col"
                      className="p-5 text-center text-sm leading-6 font-semibold text-gray-900 capitalize"
                    >
                      Symbol
                    </th>
                    <th
                      scope="col"
                      className="p-5 text-center text-sm leading-6 font-semibold text-gray-900 capitalize"
                    >
                      Price
                    </th>
                    <th
                      scope="col"
                      className="p-5 text-center text-sm leading-6 font-semibold text-gray-900 capitalize"
                    >
                      24h %
                    </th>
                    <th
                      scope="col"
                      className="p-5 text-center text-sm leading-6 font-semibold text-gray-900 capitalize"
                    >
                      Volume
                    </th>
                    <th
                      scope="col"
                      className="p-5 text-center text-sm leading-6 font-semibold text-gray-900 capitalize"
                    >
                      Market Cap
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-300 ">
                  {data.map((coin) => (
                    <tr
                      key={coin.market_cap_rank}
                      className="hover:bg-gray-100 duration-300 ease-in hover:cursor-pointer"
                    >
                      <td className="p-5 whitespace-nowrap text-md leading-6 font-medium text-gray-900 ">
                        {coin.market_cap_rank}
                      </td>
                      <td className="p-5 whitespace-nowrap text-md leading-6 font-medium text-gray-900 ">
                        <img
                          src={coin.image}
                          alt={coin.image}
                          width="40"
                          height="auto"
                          className="mx-auto"
                        />
                      </td>
                      <td className="p-5 whitespace-nowrap text-md leading-6 font-medium text-gray-900 ">
                        <Link href={`/coin/${coin.id}`}>
                          {coin.symbol.toUpperCase()}
                        </Link>
                      </td>
                      <td className="p-5 whitespace-nowrap text-md leading-6 font-medium text-gray-900 ">
                        {coin.current_price.toLocaleString()} $
                      </td>
                      <td className="p-5 whitespace-nowrap text-md leading-6 font-medium text-gray-900 ">
                        {coin.price_change_percentage_24h.toFixed(2)} %
                      </td>
                      <td className="p-5 whitespace-nowrap text-md leading-6 font-medium text-gray-900 ">
                        {coin.total_volume.toLocaleString()}
                      </td>
                      <td className="p-5 whitespace-nowrap text-md leading-6 font-medium text-gray-900 ">
                        {coin.market_cap.toLocaleString()}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Coins;

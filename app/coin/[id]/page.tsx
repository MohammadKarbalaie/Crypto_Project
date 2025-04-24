"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "next/navigation";
import Spinner from "@/app/components/Spinner";
import CoinDetails from "@/app/components/CoinDetails";

interface Coin {
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
    high_24h: { usd: number };
    total_supply: number;
    circulating_supply: number;
  };
  description: {
    en: string;
  };
}


const CoinPage: React.FC = () => {
  const { id } = useParams<{ id: string }>(); 

  const [coin, setCoin] = useState<Coin | null>(null); 
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const fetchCoinDetails = async () => {
      setLoading(true);
      setError("");

      if (!id) {
        setError("Invalid ID: Coin ID is missing.");
        setLoading(false);
        return;
      }

      const url = `https://api.coingecko.com/api/v3/coins/${id}`; // Directly construct the URL

      try {
        const response = await axios.get<Coin>(url); // Axios get with type
        setCoin(response.data);
        setLoading(false);
      } catch (e) {
        if (axios.isAxiosError(e)) {
          setError(`Failed to fetch coin details: ${e.message}`);
        } else {
          setError("An unexpected error occurred.");
        }
        setLoading(false);
      }
    };

    fetchCoinDetails();
  }, [id]); //  dependency array only needs 'id'

  return (
    <div className="container mx-auto text-center">
      <div className="pb-8">
        <div className="pt-10">
          {loading ? (
            <Spinner />
          ) : error ? (
            <h1>{error}</h1>
          ) : coin ? (
            <CoinDetails coin={coin} />
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default CoinPage;

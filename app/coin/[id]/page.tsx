"use client";

import React, { useEffect, useState } from "react";
import { detailsUrl } from "@/app/constants/api";
import axios from "axios";
import { useParams } from "next/navigation";
import Spinner from "@/app/components/Spinner";
import CoinDetails from "@/app/components/CoinDetails";

const CoinPage: React.FC = () => {
  const { id } = useParams();

  const [coin, setCoin] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  const url = id ? detailsUrl(id) : "";

  useEffect(() => {
    const fetchCoinDetails = async () => {
      setLoading(true);
      try {
        const response = await axios.get(url);
        setCoin(response.data); 
        setLoading(false);
      } catch (err) {
        setError("An error occurred while fetching coin details."); 
        setLoading(false);
      }
    };

    if (id) {
      fetchCoinDetails();
    } else {
      setError("Invalid ID, no coin data available.");
      setLoading(false);
    }
  }, [id, url]);

  return (
<div className="container mx-auto text-center">
      <div className="pb-8">
        <div className="pt-10">
          {loading ? (
            <Spinner />
          ) : error !== "" ? (
            <h1>{error}</h1>
          ) : (
            <CoinDetails coin={coin} />
          )}
        </div>
      </div>
    </div>
  );
};

export default CoinPage;

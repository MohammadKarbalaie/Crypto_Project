"use client";
import { useEffect, useState } from "react";
import { baseUrl } from "./constants/api";
import axios from "axios";
import Spinner from "./components/Spinner";
import Coins from "./components/Coins";

export default function Home() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);
    axios(baseUrl)
      .then((response) => {
        setLoading(false);
        //  console.log(response.data);
        setData(response.data);
      })
      .catch((error) => {
        setError("An error occured");
      });
  }, []);
  return (
    <div className="container mx-auto text-center">
      <h3 className="font-semibold text-3xl mt-2">Crypto Tracking</h3>
      <h5 className="font-semibold text-2xl mt-4">
        A place to manage all of your trade informations and actions
      </h5>
      <h5 className="font-semibold text-2xl mt-4">
        Do not forget to always using asset and risk management!!!
      </h5>
      <div className="pb-8">
        <div className="pt-10">
          {loading ? (
            <Spinner />
          ) : error !== "" ? (
            <h1>{error}</h1>
          ) : (
            <Coins data={data} />
          )}
        </div>
      </div>
    </div>
  );
}

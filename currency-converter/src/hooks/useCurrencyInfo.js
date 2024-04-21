import { useEffect, useState } from "react";

const useCurrencyInfo = (currency) => {
  let url = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`;

  const [data, setData] = useState("");
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((responseData) => setData(responseData));
  }, [currency, url]);
  return data;
};

export default useCurrencyInfo;

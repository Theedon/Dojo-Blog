import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortController = new AbortController();
    setTimeout(() => {
      fetch(url, { signal: abortController.signal })
        .then((response) => {
          if (!response.ok) {
            throw Error("could not fetch the data for that resource");
          }
          return response.json();
        })
        .then((data) => {
          setData(data);
          setIsLoading(false);
          setError(null);
        })
        .catch((error) => {
          if (error.message == "AbortError") {
            console.log("fetch aborted");
          } else {
            setError(error.message);
            setIsLoading(false);
          }
        });
    }, 1000);

    return () => {
      abortController.abort();
    };
  }, [url]);

  return { data, isLoading, error };
  //we could return as array too but then we would have to destructure using the exact format
  //object lets us destructure in any order
};

export default useFetch;

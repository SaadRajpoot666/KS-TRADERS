import { useEffect, useState } from "react";

export function useFetch({ URL }) {
  const [url, setUrl] = useState(URL);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const controller = new AbortController();
    const signal = controller.signal;
    fetch(url, signal)
      .then((res) => {
        if (res.status === 200) {
          return res.json();
        } else {
          return Promise.reject("Error Fetching data...");
        }
      })
      .then((data) => setData(data))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
    return () => controller.abort(), setError(null);
  }, [url, URL]);
  return [setUrl, data, loading, error];
}

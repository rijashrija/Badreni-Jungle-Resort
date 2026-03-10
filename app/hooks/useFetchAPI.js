
'use client';
import { useState, useEffect } from "react";

const useFetchApi = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`API request failed with status ${response.status}`);
        }

        const text = await response.text();

        // Try parsing JSON directly
        try {
          const jsonData = JSON.parse(text);
          setData(jsonData);
        } catch {
          // If JSON parsing fails, try parsing as JavaScript object
          const jsMatch = text.match(
            /const\s+\w+\s*=\s*(\{[\s\S]*?\}|\[[\s\S]*?\]);/,
          );
          if (jsMatch && jsMatch[1]) {
            const parsedData = new Function(`return ${jsMatch[1]};`)();
            setData(parsedData);
          } else {
            throw new Error("API response format is incorrect or unexpected.");
          }
        }
      } catch (err) {
        setError(err.message || "Failed to fetch data.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
};

export default useFetchApi; 
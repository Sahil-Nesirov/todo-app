import React, { useState, useEffect } from 'react';
import CurrencyForm from './components/CurrencyForm';

const App = () => {
  const [rates, setRates] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://api.exchangerate-api.com/v4/latest/USD')
      .then((res) => res.json())
      .then((data) => {
        setRates(data.rates);
        setLoading(false);
      })
      .catch((err) => {
        setError('Failed to fetch rates');
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1>Currency Exchange</h1>
      <CurrencyForm rates={rates} />
    </div>
  );
};

export default App;

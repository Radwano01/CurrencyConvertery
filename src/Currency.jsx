import React, { useState } from 'react';
import './style.css'; // Import your CSS file

const CurrencyConverter = () => {
  const [amount, setAmount] = useState('');
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('EUR');
  const [convertedAmount, setConvertedAmount] = useState(null);

  const convertCurrency = () => {
    const exchangeRates = {
      USD: {
        EUR: 0.85,
        GBP: 0.73,
      },
      EUR: {
        USD: 1.18,
        GBP: 0.86,
      },
      GBP: {
        USD: 1.37,
        EUR: 1.16,
      },
    };

    const rate = exchangeRates[fromCurrency][toCurrency];
    const convertedAmount = (amount * rate).toFixed(2);

    setConvertedAmount(convertedAmount);
  };

  return (
    <div className="currency-converter">
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <b>From</b>
      <select
        value={fromCurrency}
        onChange={(e) => setFromCurrency(e.target.value)}
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="GBP">GBP</option>
      </select>
      <b>To</b>
      <select
        value={toCurrency}
        onChange={(e) => setToCurrency(e.target.value)}
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="GBP">GBP</option>
      </select>
      <button onClick={convertCurrency}>Convert</button>

      {amount && (
        <p>
          {amount} {fromCurrency} is equal to {convertedAmount} {toCurrency}
        </p>
      )}
    </div>
  );
};

export default CurrencyConverter;

import React, { useState } from 'react';

const Deposit = () => {
  const [amount, setAmount] = useState(0);

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const handleDeposit = () => {
    // Add logic to handle deposit
  };

  return (
    <div>
      <h2>Deposit</h2>
      <input type="number" value={amount} onChange={handleAmountChange} />
      <button onClick={handleDeposit}>Deposit</button>
    </div>
  );
};

export default Deposit;
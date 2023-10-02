import React, { useState } from 'react';

const Withdraw = () => {
  const [amount, setAmount] = useState(0);

  const handleWithdraw = () => {
    // Logic to handle withdrawal
  };

  return (
    <div>
      <h2>Withdraw</h2>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button onClick={handleWithdraw}>Withdraw</button>
    </div>
  );
};

export default Withdraw;
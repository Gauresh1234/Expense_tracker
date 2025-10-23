
import React, { useState } from "react";

const AddBudgetModal = ({ onClose, onSave }) => {
  const [amount, setAmount] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (amount) {
      onSave(Number(amount));
    }
  };

  return (
    
    <div className="modal-overlay">
      <div className="modal">
        <button className="close" onClick={onClose}>×</button>
        <h3>Add Budget</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="number"
            placeholder="Enter Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
          />
          <button type="submit" className="btn-blue">+ Add Budget</button>
        </form>
      </div>
    </div>
  );
};

export default AddBudgetModal;

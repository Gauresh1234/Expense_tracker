
import React, { useState } from "react";

const AddExpenseModal = ({ onClose, onSave }) => {
  const [form, setForm] = useState({
    name: "",
    date: "",
    category: "",
    amount: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const newExpense = {
      id: Date.now(),
      ...form,
      amount: parseFloat(form.amount),
    };
    onSave(newExpense);
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <button className="close" onClick={onClose}>×</button>
        <h3>Add Expense</h3>
        <form onSubmit={handleSubmit}>
          <input name="name" placeholder="Expense Name" onChange={handleChange} required />
          <input name="date" type="date" onChange={handleChange} required />
          <select name="category" onChange={handleChange} required>
            <option value="">Choose a Category</option>
            <option value="Food & Drink">Food & Drink</option>
            <option value="Groceries">Groceries</option>
            <option value="Travel">Travel</option>
            <option value="Health">Health</option>
          </select>
          <input name="amount" type="number" placeholder="Enter Amount" onChange={handleChange} required />
          <button className="btn-blue" type="submit">+ Add Expense</button>
        </form>
      </div>
    </div>
  );
};

export default AddExpenseModal;

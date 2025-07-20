
import React, { useState } from "react";

const EditExpenseModal = ({ expense, onClose, onSave }) => {
  const [form, setForm] = useState({ ...expense });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ ...form, amount: parseFloat(form.amount) });
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <button className="close" onClick={onClose}>×</button>
        <h3>Edit Expense</h3>
        <form onSubmit={handleSubmit}>
          <input name="name" value={form.name} onChange={handleChange} required />
          <input name="date" type="date" value={form.date} onChange={handleChange} required />
          <select name="category" value={form.category} onChange={handleChange} required>
            <option value="">Choose a Category</option>
            <option value="Food & Drink">Food & Drink</option>
            <option value="Groceries">Groceries</option>
            <option value="Travel">Travel</option>
            <option value="Health">Health</option>
          </select>
          <input name="amount" type="number" value={form.amount} onChange={handleChange} required />
          <button className="btn-blue" type="submit">Save Changes</button>
        </form>
      </div>
    </div>
  );
};

export default EditExpenseModal;

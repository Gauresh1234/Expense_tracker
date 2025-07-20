
import React from "react";

const ExpenseFilter = ({ onAddBudget, onAddExpense }) => {
  return (
    <div className="expense-filter">
      <input type="text" placeholder="🔍 Search" className="search-input" />

      <div className="category-buttons">
        <button className="active">All Expenses</button>
        <button>Food & Drinks</button>
        <button>Groceries</button>
        <button>Travel</button>
        <button>Health</button>
      </div>

      <div className="action-buttons">
        <button className="btn-blue" onClick={onAddBudget}>+ Add Budget</button>
        <button className="btn-blue" onClick={onAddExpense}>+ Add Expense</button>
      </div>
    </div>
  );
};

export default ExpenseFilter;

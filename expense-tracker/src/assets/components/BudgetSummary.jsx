
import React from "react";

const BudgetSummary = ({ budget, expense, remaining }) => {
  return (
    <div className="budget-summary">
      <div className="summary-card">
        <h4>Total Budget</h4>
        <p>₹{budget.toLocaleString()}</p>
      </div>
      <div className="summary-card">
        <h4>Total Expense</h4>
        <p>₹{expense.toLocaleString()}</p>
      </div>
      <div className="summary-card">
        <h4>Remaining Budget</h4>
        <p>₹{remaining.toLocaleString()}</p>
      </div>
    </div>
  );
};

export default BudgetSummary;

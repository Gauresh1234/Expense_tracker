import React from "react";

const ExpenseTable = ({ expenses, onEdit, onDelete }) => {
  return (
    <div className="expense-table">
      <table>
        <thead>
          <tr>
            <th>Sr.</th>
            <th>Expense</th>
            <th>Amount</th>
            <th>Edit / Delete</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((item, index) => (
            <tr key={item.id}>
              <td>{index + 1}</td>
              <td>{item.name}</td>
              <td>{item.amount.toFixed(2)}</td>
              <td>
                <button className="edit-btn" onClick={() => onEdit(item)}>
                  ✏️ Edit
                </button>
                <button className="delete-btn" onClick={() => onDelete(item)}>
                  🗑️ Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ExpenseTable;

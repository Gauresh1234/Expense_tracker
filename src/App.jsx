import { useState, useEffect } from "react";
import "./App.css";
import Header from "./assets/components/Header";
import BudgetSummary from "./assets/components/BudgetSummary";
import ExpenseFilter from "./assets/components/ExpenseFilter";
import ExpenseChart from "./assets/components/ExpenseChart";
import ExpenseTable from "./assets/components/ExpenseTable";
import AddBudgetModal from "./assets/components/AddBudgetModal";
import AddExpenseModal from "./assets/components/AddExpenseModal";
import EditExpenseModal from "./assets/components/EditExpenseModal";
import ConfirmDeleteModal from "./assets/components/ConfirmDeleteModal";
import { initialExpenses, initialBudget } from "./data";

const App = () => {
  const [budget, setBudget] = useState(() => {
    const storedBudget = localStorage.getItem("budget");
    return storedBudget ? JSON.parse(storedBudget) : initialBudget;
  });

  const [expenses, setExpenses] = useState(() => {
    const storedExpenses = localStorage.getItem("expenses");
    return storedExpenses ? JSON.parse(storedExpenses) : initialExpenses;
  });

  const [showAddBudgetModal, setShowAddBudgetModal] = useState(false);
  const [showAddExpenseModal, setShowAddExpenseModal] = useState(false);
  const [editingExpense, setEditingExpense] = useState(null);
  const [deletingExpense, setDeletingExpense] = useState(null);

  const totalExpense = expenses.reduce((sum, exp) => sum + exp.amount, 0);
  const remaining = budget - totalExpense;

  useEffect(() => {
    localStorage.setItem("budget", JSON.stringify(budget));
  }, [budget]);

  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  return (
    <div className="app-container">
      <Header />
      <div className="Name">
        <h1> Hello, Gauresh Kotian</h1>
      </div>
      <BudgetSummary
        budget={budget}
        expense={totalExpense}
        remaining={remaining}
      />
      <ExpenseFilter
        onAddBudget={() => setShowAddBudgetModal(true)}
        onAddExpense={() => setShowAddExpenseModal(true)}
      />
      <ExpenseChart />
      <ExpenseTable
        expenses={expenses}
        onEdit={(exp) => setEditingExpense(exp)}
        onDelete={(exp) => setDeletingExpense(exp)}
      />

      {showAddBudgetModal && (
        <AddBudgetModal
          onClose={() => setShowAddBudgetModal(false)}
          onSave={(amount) => {
            setBudget(amount);
            setShowAddBudgetModal(false);
          }}
        />
      )}

      {showAddExpenseModal && (
        <AddExpenseModal
          onClose={() => setShowAddExpenseModal(false)}
          onSave={(newExpense) => {
            setExpenses([...expenses, newExpense]);
            setShowAddExpenseModal(false);
          }}
        />
      )}

      {editingExpense && (
        <EditExpenseModal
          expense={editingExpense}
          onClose={() => setEditingExpense(null)}
          onSave={(updatedExpense) => {
            const updatedList = expenses.map((exp) =>
              exp.id === updatedExpense.id ? updatedExpense : exp
            );
            setExpenses(updatedList);
            setEditingExpense(null);
          }}
        />
      )}

      {deletingExpense && (
        <ConfirmDeleteModal
          onClose={() => setDeletingExpense(null)}
          onConfirm={() => {
            const updatedList = expenses.filter(
              (exp) => exp.id !== deletingExpense.id
            );
            setExpenses(updatedList);
            setDeletingExpense(null);
          }}
        />
      )}
    </div>
  );
};

export default App;

import ExpenseTracker from "../Expense Tracker/ExpenseFields";
import ExpenseFilter from "../Expense Tracker/ExpenseFilter";
import ExpenseList from "../Expense Tracker/ExpenseList";
import { useState } from "react";

const ExpenseTrackerProj = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [expenses, setExpenses] = useState([
    {
      id: 1,
      description: "Dummy expense",
      amount: 10,
      category: "First",
    },
  ]);

  const visibleExpenses = selectedCategory
    ? expenses.filter((e) => e.category === selectedCategory)
    : expenses;

  const onDelete = (id: number) => {
    setExpenses(expenses.filter((e) => e.id !== id));
  };
  return (
    <>
      <ExpenseTracker
        onSubmit={(expense) =>
          setExpenses([
            ...expenses,
            {
              ...expense,
              id: expenses.length + 1,
            },
          ])
        }
      />
      <ExpenseFilter
        onSelectCategory={(category) => setSelectedCategory(category)}
      />
      <ExpenseList expenses={visibleExpenses} onDelete={onDelete} />
    </>
  );
};

export default ExpenseTrackerProj;

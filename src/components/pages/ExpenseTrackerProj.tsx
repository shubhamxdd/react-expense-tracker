import ExpenseTracker from "../Expense Tracker/ExpenseFields";
import ExpenseFilter from "../Expense Tracker/ExpenseFilter";
import ExpenseList from "../Expense Tracker/ExpenseList";
import { useState } from "react";

const ExpenseTrackerProj = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [expenses, setExpenses] = useState([
    {
      id: 1,
      description: "asd",
      amount: 10,
      category: "First",
    },
    {
      id: 2,
      description: "second",
      amount: 14,
      category: "First",
    },
    {
      id: 3,
      description: "3rd",
      amount: 24,
      category: "Second",
    },
    {
      id: 4,
      description: "last",
      amount: 42,
      category: "Third",
    },
  ]);

  const visibleExpenses = selectedCategory
    ? expenses.filter((e) => e.category === selectedCategory)
    : expenses;

  const onDelete = (id: number) => {
    console.log("Deleted id:", id);
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

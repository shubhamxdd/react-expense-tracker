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
      ammount: 10,
      category: "First",
    },
    {
      id: 2,
      description: "second",
      ammount: 14,
      category: "First",
    },
    {
      id: 3,
      description: "3rd",
      ammount: 24,
      category: "Second",
    },
    {
      id: 4,
      description: "last",
      ammount: 42,
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
      <ExpenseTracker />
      <ExpenseFilter
        onSelectCategory={(category) => setSelectedCategory(category)}
      />
      <ExpenseList expenses={visibleExpenses} onDelete={onDelete} />
    </>
  );
};

export default ExpenseTrackerProj;

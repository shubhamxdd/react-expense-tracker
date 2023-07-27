import ExpenseTracker from "../Expense Tracker/ExpenseFields";
import ExpenseList from "../Expense Tracker/ExpenseList";
import { useState } from "react";

const ExpenseTrackerProj = () => {
  const [expenses, setExpenses] = useState([
    {
      id: 1,
      description: "asd",
      ammount: 10,
      category: "Nothing",
    },
    {
      id: 2,
      description: "second",
      ammount: 14,
      category: "Kuch bhi",
    },
    {
      id: 3,
      description: "3rd",
      ammount: 24,
      category: "Kuch bhi 2",
    },
    {
      id: 4,
      description: "last",
      ammount: 42,
      category: "asda",
    },
  ]);
  const onDelete = (id: number) => {
    console.log("Deleted id:", id);
    setExpenses(expenses.filter((e) => e.id !== id));
  };
  return (
    <>
      <ExpenseTracker onSelectCategory={(category) => console.log(category)} />
      <ExpenseList expenses={expenses} onDelete={onDelete} />
    </>
  );
};

export default ExpenseTrackerProj;

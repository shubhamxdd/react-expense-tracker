interface Expense {
  id: number;
  description: string;
  ammount: number;
  category: string;
}
interface Props {
  expenses: Expense[];
  onDelete: (id: number) => void;
}

const ExpenseList = ({ expenses, onDelete }: Props) => {
  if (expenses.length === 0) {
    return <p>Add some items.</p>;
  }
  return (
    <>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>S.No</th>
            <th>Description</th>
            <th>Ammount</th>
            <th>Category</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((expenses) => {
            return (
              <tr key={expenses.id}>
                <td>{expenses.id}.</td>
                <td>{expenses.description}</td>
                <td>{expenses.ammount}</td>
                <td>{expenses.category}</td>
                <td>
                  <button
                    className="btn btn-outline-danger"
                    onClick={() => onDelete(expenses.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
        <tfoot>
          <tr>
            <td></td>
            <td>Total</td>
            <td>
              $
              {expenses
                .reduce((acc, expense) => expense.ammount + acc, 0)
                .toFixed(2)}
            </td>
            <td></td>
            <td></td>
          </tr>
        </tfoot>
      </table>
    </>
  );
};

export default ExpenseList;

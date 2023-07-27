import { categories } from "../pages/ExpenseTrackerProj";
interface Props {
  onSelectCategory: (category: string) => void;
}

const ExpenseFilter = ({ onSelectCategory }: Props) => {
  return (
    <>
      <div className="mb-3">
        <select
          name="category"
          id="category"
          className="form-select"
          onChange={(event) => onSelectCategory(event.target.value)}
        >
          <option value="">All Categories</option>
          {categories.map((category) => {
            return (
              <option value={category} key={category}>
                {category}
              </option>
            );
          })}
        </select>
      </div>
    </>
  );
};

export default ExpenseFilter;

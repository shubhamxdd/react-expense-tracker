import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import categories from "../Expense Tracker/categories";

interface Props {
  onSubmit: (data: formData) => void;
}

const schema = z.object({
  description: z
    .string()
    .min(3, { message: "Description must be atleast 3 characters." }),
  amount: z
    .number({ invalid_type_error: "Amount field is required." })
    .min(0.01, { message: "Amount should be more than 0.01" })
    .max(100_000, { message: "Amount should be less than 100,000" }),
  category: z.enum(categories, {
    errorMap: () => ({ message: "Please select a category." }),
  }),
});

type formData = z.infer<typeof schema>;

const ExpenseTracker = ({ onSubmit }: Props) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<formData>({ resolver: zodResolver(schema) });
  return (
    <>
      <h1>ExpenseTracker</h1>
      <form
        onSubmit={handleSubmit((data) => {
          onSubmit(data);
          reset();
        })}
      >
        <div className="mb-3">
          <label htmlFor="desc" className="form-label">
            Description
          </label>
          <input
            type="text"
            id="desc"
            className="form-control"
            {...register("description")}
          />
          {errors.description && (
            <p className="text-danger">{errors.description.message}</p>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="amount" className="form-label">
            Amount
          </label>
          <input
            type="number"
            id="amount"
            className="form-control"
            {...register("amount", { valueAsNumber: true })}
          />
          {errors.amount && (
            <p className="text-danger">{errors.amount.message}</p>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="category" className="form-label">
            Category
          </label>
          <select
            id="category"
            className="form-select"
            {...register("category")}
          >
            <option value=""></option>
            {categories.map((category) => {
              return (
                <option value={category} key={category}>
                  {category}
                </option>
              );
            })}
          </select>
          {errors.category && (
            <p className="text-danger">{errors.category.message}</p>
          )}
        </div>
        <button className="btn btn-primary mb-3">Submit</button>
      </form>
    </>
  );
};

export default ExpenseTracker;

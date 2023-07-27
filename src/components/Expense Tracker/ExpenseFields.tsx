import { useForm, FieldValues } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { categories } from "../pages/ExpenseTrackerProj";

const schema = z.object({
  desc: z
    .string()
    .min(3, { message: "Description must be atleast 3 characters." }),
  amt: z.number({ required_error: "This field is required." }),
  category: z.string(),
});

type formData = z.infer<typeof schema>;

const ExpenseTracker = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<formData>({ resolver: zodResolver(schema) });
  const onSubmit = (data: FieldValues) => {
    console.log(data);
  };
  return (
    <>
      <h1>ExpenseTracker</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label htmlFor="desc" className="form-label">
            Description
          </label>
          <input
            type="text"
            id="desc"
            className="form-control"
            {...register("desc")}
          />
          {errors.desc && <p className="text-danger">{errors.desc.message}</p>}
        </div>
        <div className="mb-3">
          <label htmlFor="amt" className="form-label">
            Ammount
          </label>
          <input
            type="number"
            id="amt"
            className="form-control"
            {...register("amt", { valueAsNumber: true })}
          />
          {errors.amt && <p className="text-danger">{errors.amt.message}</p>}
        </div>
        <div className="mb-3">
          <label htmlFor="category" className="form-label">
            Category
          </label>
          <select name="category" id="category" className="form-select">
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
        <button className="btn btn-primary mb-3">Submit</button>
      </form>
    </>
  );
};

export default ExpenseTracker;

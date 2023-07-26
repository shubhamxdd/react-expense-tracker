import { useForm, FieldValues } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  name: z.string().min(3, { message: "custom error msg for atleast 3 char" }),
  age: z.number({ invalid_type_error: "This field is required" }).min(12),
});

type formData = z.infer<typeof schema>;

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<formData>({ resolver: zodResolver(schema) });
  const onSubmit = (data: FieldValues) => {
    console.log(data);
  };
  return (
    <>
      <h1>Form</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="form-control"
            {...register("name")}
          />
          {errors.name && <p className="text-danger">{errors.name.message}</p>}
        </div>
        <div className="mb-3">
          <label htmlFor="age" className="form-label">
            Age
          </label>
          <input
            type="number"
            id="age"
            className="form-control"
            {...register("age", { valueAsNumber: true })}
          />
          {errors.age && <p className="text-danger">{errors.age.message}</p>}
        </div>

        <button type="submit" className="btn btn-primary" disabled={!isValid}>
          Submit
        </button>
      </form>
    </>
  );
};

export default Form;

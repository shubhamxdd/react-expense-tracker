import { FormEvent, useState } from "react";
const Form = () => {
  //   const nameRef = useRef<HTMLFormElement>(null);
  //   const ageRef = useRef<HTMLFormElement>(null);
  //   const person = {
  //     name: "",
  //     age: 0,
  //   };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    // if (nameRef.current !== null) {
    //   person.name = nameRef.current.value;
    // }
    // if (ageRef.current !== null) {
    //   person.age = ageRef.current.value;
    // }
    // console.log(person);
  };

  return (
    <>
      <h1>Form</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input type="text" id="name" className="form-control" />
        </div>
        <div className="mb-3">
          <label htmlFor="age" className="form-label">
            Age
          </label>
          <input type="number" id="age" className="form-control" />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
};

export default Form;

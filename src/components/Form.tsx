import { FormEvent, useState } from "react";
const Form = () => {
  const [person, setPerson] = useState({
    name: "",
    age: 0,
  });
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    console.log(person);
  };

  return (
    <>
      <h1>Form</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="form-control"
            value={person.name}
            onChange={(event) => {
              console.log(event.target.value);
              setPerson({
                ...person,
                name: event.target.value,
              });
            }}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="age" className="form-label">
            Age
          </label>
          <input
            type="number"
            id="age"
            className="form-control"
            value={person.age}
            onChange={(event) => {
              console.log(event.target.value);
              setPerson({
                ...person,
                age: parseInt(event.target.value),
              });
            }}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
};

export default Form;

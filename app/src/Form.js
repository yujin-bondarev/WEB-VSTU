import React from "react";
import { useState } from "react";

const Form = ({ handleSubmit, inracer }) => {
  const [racer, setracer] = useState(inracer);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setracer({ ...racer, [name]: value });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    handleSubmit(racer);
    setracer(inracer);
  };

  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="name">Name</label>
      <input
        type="text"
        name="name"
        value={racer.name}
        onChange={handleChange}
      />
      <label htmlFor="carModel">Car Model</label>
      <input
        type="text"
        name="carModel"
        value={racer.carModel}
        onChange={handleChange}
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default Form;
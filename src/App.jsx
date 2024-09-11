import React from "react";
import { useForm } from "react-hook-form";

function App() {
  const { register, handleSubmit } = useForm();
  return (
    <div className="container">
      <form
        className="form flex gap-3 p-5"
        onSubmit={handleSubmit((data) => console.log(data))}
        action=""
      >
        <input
          {...register("name")}
          type="text"
          placeholder="Enter your name"
        />
        <input
          {...register("email")}
          type="email"
          placeholder="Enter your email"
        />
        <button type="submit" className="submit-btn">
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;

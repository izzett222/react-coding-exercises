import { useState } from "react";

export default function Form() {
  const [data, setData] = useState({ firstname: "", lastName: "" });
  function handleChange(event) {
    const { name, value } = event.target;
    setData({ ...data, [name]: value });
  }
  function handleSubmit(event) {
    event.preventDefault();
    alert(`Hello ${data.firstname} ${data.lastName}`);
  }
  return (
    <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
      <input
        type="text"
        className="border border-gray-600 rounded-md w-80 h-9 indent-2"
        name="firstname"
        placeholder="First name"
        value={data.firstname}
        onChange={handleChange}
      />
      <input
        type="text"
        className="border border-gray-600 rounded-md w-80 h-9 indent-2"
        name="lastName"
        value={data.lastName}
        placeholder="Last name"
        onChange={handleChange}
      />
      <button className="bg-red-500 px-4 py-2 text-white text-xl uppercase rounded-md">
        greet me
      </button>
    </form>
  );
}

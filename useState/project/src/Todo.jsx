import { useState } from "react";

function Todo() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      setTodos((todo) => [...todo, input]);
      setInput("");
    }
  };

  const handleChange = e => {setInput(e.target.value)};
  return (
    <>
      <h1>todos</h1>

      <form onSubmit={handleSubmit}>
        <input type="text" value={input} onChange={handleChange} placeholder="add tasks" />
        <button type="submit">submit</button>
      </form>

      <div>
        {todos.map((key) => (
          <li key={`${key + Math.ceil(Math.random() * 100)}`}>title: {key}</li>
        ))}
      </div>
    </>
  );
}

export default Todo;

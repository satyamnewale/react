import { useState, useReducer } from "react";

const Todo = () => {
  const [text, setText] = useState("");
  const [updateText, setUpdateText] = useState("");

  const initialState = [];

  const todoReducer = (state, action) => {
    switch (action.type) {
      case "add":
        return [
          ...state,
          {
            id: `${Date.now()}-${Math.floor(Math.random() * 10000)}`,
            task: action.payload,
            completed: false,
            isUpdate: false,
          },
        ];

      case "update":
        return state.map((todo) =>
          todo.id === action.payload ? { ...todo, isUpdate: !todo.isUpdate } : todo
        );

      case "updateText":
        return state.map((todo) =>
          todo.id === action.payload.id
            ? { ...todo, task: action.payload.newtext, isUpdate: false }
            : todo
        );

      case "remove":
        return state.filter((todo) => todo.task !== action.payload);

      case "toggle":
        return state.map((todo) =>
          todo.id === action.payload
            ? { ...todo, completed: !todo.completed }
            : todo
        );

      default:
        return state;
    }
  };

  const [todos, dispatch] = useReducer(todoReducer, initialState);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (text.trim()) {
      dispatch({ type: "add", payload: text });
      setText("");
    }
  };

  const handleUpdate = (e, id) => {
    e.preventDefault();

    if (updateText.trim()) {
      dispatch({ type: "updateText", payload: { id, newtext: updateText } });
      setUpdateText("");
    }
  };

  return (
    <>
    <h1>todo list</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="task"
        />
        <button type="submit">+</button>
      </form>

      <ul>
        {todos.map((todo) => {
          return (
            <div key={todo.id}>
              <span
                onClick={() => dispatch({ type: "toggle", payload: todo.id })}
                style={{
                  textDecoration: todo.completed ? "line-through" : "none",
                  cursor: "pointer",
                }}
              >
                {todo.task}
              </span>

              <button
                  onClick={() =>
                    dispatch({ type: "remove", payload: todo.task })
                  }
                >
                  delete
                </button>
                <button
                  onClick={() => dispatch({ type: "update", payload: todo.id })}
                >
                  update slot
                </button>

              {todo.isUpdate && (
                  <form
                onSubmit={(e) => handleUpdate(e, todo.id)} // remember how to destructure
                style={{ display: todo.isUpdate ? "block" : "none" }}
              >
                <input
                  type="text"
                  onChange={(e) => setUpdateText(e.target.value)}
                  placeholder="update task"
                />
                <button type="submit">push</button>
              </form>
              )}
            </div>
          );
        })}
      </ul>
    </>
  );
};

export default Todo;

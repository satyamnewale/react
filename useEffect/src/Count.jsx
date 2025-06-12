// changes count and title name

import { useState, useEffect } from "react";

const Count = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("hello world");

  useEffect(() => {
    console.log("updated");
    document.title = (`${name} : count - ${count}`);
  }, [name, count]);

  const handleClick = () => {
    setCount(0);
    setName("");
  };

  return (
    <>
      <input
        type="text"
        value={name ?? ""}
        onChange={(e) => setName(e.target.value)}
        placeholder="name"
      />
      <input
        type="number"
        value={count ?? 0}
        onChange={(e) => setCount(Number(e.target.value))}
        placeholder="count"
      />
      <button onClick={handleClick}>push</button>
    </>
  );
};

export default Count;

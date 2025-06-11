import { useState } from "react";

function App() {
  // about a variable
  const [count, setCount] = useState(0);

  const increase = () => setCount((prev) => prev + 1);
  const decrease = () => setCount((prev) => prev - 1);

  // about a array
  const [friends, setFriends] = useState(["alex", "jhon"]);

  const addFriend = () => setFriends(() => [...friends, "harry"]);
  const removeFriend = () => setFriends(friends.filter((f) => f !== "alex"));
  const updateFriend = () =>
    setFriends(friends.map((f) => (f == "jhon" ? "jhon.K" : f)));

  //about object
  const [name, setName] = useState([
    {
      subName: "om",
      surName: "shree",
      marks: 10,
    },
  ]);

  const addName = () => setName((k) => [...k, { subName: "sham", surName: "hari", marks: 9 }]);
  const removeName = () => setName(name.filter((k)=> k.subName !== 'om'))
  const updateName =() => setName(name.map(k => k.subName == "sham"? {...k,subName:'Soham'}: k))

  return (
    <>
      <h1>{count}</h1>
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>

      <br />

      {friends.map((f) => {
        return <li key={f}>{f}</li>;
      })}

      <button onClick={addFriend}>add new friend</button>
      <button onClick={removeFriend}>remove a friend </button>
      <button onClick={updateFriend}>update friend</button>

      <br />

      {name.map((key) => (
        <ul key={`${key+Math.random()}`}>
          <li>{key.subName}</li>
          <li>{key.surName}</li>
          <li>{key.marks}</li>
        </ul>
      ))}

      <button onClick={addName}>add name</button>
      <button onClick={removeName}>remove name</button>
      <button onClick={updateName}>update name</button>
    </>
  );
}

export default App;

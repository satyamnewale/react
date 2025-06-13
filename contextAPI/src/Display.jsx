import { useContext, useState } from 'react';
import { UserContext } from './UserContext';

const Display = () => {
  const { user, setUser } = useContext(UserContext);
  const [input, setInput] = useState({ name: '', id: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.name || !input.id) return;

    setUser((prev) => [...prev, { name: input.name.trim(), id: Number(input.id) }]);
    setInput({ name: '', id: '' });
  };

  const handleUpdate = () => {
    const updatedUsers = user.map((u) =>
      u.name === 'sham' ? { ...u, id: 69 } : u
    );
    setUser(updatedUsers);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={input.name}
          onChange={(e) => setInput({ ...input, name: e.target.value })}
          placeholder="name"
        />
        <input
          type="number"
          value={input.id}
          onChange={(e) => setInput({ ...input, id: e.target.value })}
          placeholder="id"
        />
        <button type="submit">Add</button>
      </form>

      <button onClick={handleUpdate}>Update Sham</button>

      {user.map((u, index) => (
        <ul key={index}>
          <li>name : {u.name}</li>
          <li>id : {u.id}</li>
        </ul>
      ))}
    </div>
  );
};

export default Display;

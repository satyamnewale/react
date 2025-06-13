import { useState } from 'react';
import { UserContext } from './UserContext';
import Display from './Display';

function App() {
  const [user, setUser] = useState([]);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <Display />
    </UserContext.Provider>
  );
}

export default App;

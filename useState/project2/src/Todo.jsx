import { useState } from "react";

function Todo() {
  const [item, setItem] = useState([]);
  const [quantity, setQuantity] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = (e)=> {
    e.preventDefault(); //this help to stop rerender after submit

    if(!name || !quantity) return ;
    setItem(() => [...item,{name:name, quantity:quantity,}]);
    setName("");
    setQuantity("");
  }

  return (
    <>
     <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="name of item"/>
        <input type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} placeholder="name of item"/>
        <button type="submit">add</button>
      </form>

      <ul>
      {item.map((item,index) => 
      
        <li key={index}>{item.name} - Quantity : {item.quantity}</li>
      )}
      </ul>

     </div>
    </>
  );
}

export default Todo;

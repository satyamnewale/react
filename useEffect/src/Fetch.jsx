import {useState, useEffect} from 'react'

const Fetch = () => {

    const [data, setData] = useState([]);

    useEffect (() => {
        const fetchData = async () => {
            const res = await fetch('https://jsonplaceholder.typicode.com/posts');
            const data = await res.json();
            setData(data);
        }
        fetchData();
    },[])


  return (
    <>
    
        {data.map((d , index) =>(
            <ul key={index}>
                <li>id : {d.id}</li>
                <li>title : {d.title}</li>
                <li>body : {d.body}</li>
            </ul>
        ))}
    
    </>
  )
}

export default Fetch
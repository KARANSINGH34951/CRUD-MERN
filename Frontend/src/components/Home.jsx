import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Home = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const { data } = await axios.get('http://localhost:3000/read'); 
      setUsers(data); 
      console.log(data);
      
    } catch (err) {
      console.error('Error fetching data:', err);
      setError('Failed to fetch users');
    }
  };

  useEffect(() => {
    console.log(users);
    fetchData();
  }, []);

  return (
    <div>
      <h1>User List</h1>
      {
        users.map((user,index)=>{
          return(
            <div key={index}>
              <h1>{user.name}</h1>
              <h2>{user.email}</h2>
              <h3>{user.password}</h3>
            </div>
          )
        })
      }
      
      
    </div>
  );
};

export default Home;

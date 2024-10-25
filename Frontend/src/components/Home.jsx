import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; 

const Home = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate(); 

  const fetchData = async () => {
    try {
      const { data } = await axios.get("https://crud-mern-jepl.onrender.com/user/read");
      setUsers(data);
    } catch (err) {
      console.error("Error fetching data:", err);
      setError("Failed to fetch users");
    }
  };

  const handleEdit = (userId) => {
    navigate(`/edit/${userId}`);
  };

  const handleDelete = async (userId) => {
    try {
      await axios.delete(`https://crud-mern-jepl.onrender.com/user/delete/${userId}`);
      fetchData(); 
    } catch (err) {
      console.error("Error deleting user:", err);
      setError("Failed to delete user");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4 text-center">User List</h1>

      {error && <p className="text-red-500 text-center">{error}</p>}

      {users.length > 0 ? (
        <table className="table-auto w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 px-4 py-2">Name</th>
              <th className="border border-gray-300 px-4 py-2">Email</th>
              <th className="border border-gray-300 px-4 py-2">Password</th>
              <th className="border border-gray-300 px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id} className="hover:bg-gray-50">
                <td className="border border-gray-300 px-4 py-2">{user.name}</td>
                <td className="border border-gray-300 px-4 py-2">{user.email}</td>
                <td className="border border-gray-300 px-4 py-2">{user.password}</td>
                <td className="border border-gray-300 px-4 py-2 flex space-x-2">
                  <button
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
                    onClick={() => handleEdit(user._id)} 
                  >
                    Edit
                  </button>
                  <button
                    className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700 transition"
                    onClick={() => handleDelete(user._id)} 
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className="text-center">No users found</p>
      )}
    </div>
  );
};

export default Home;

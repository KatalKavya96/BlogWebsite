import React, { useState } from "react";

const AdminPage = ({ setIsAuthenticated }) => {
  const [credentials, setCredentials] = useState({ username: "", password: "" });

  const handleChange = (event) => {
    setCredentials({
      ...credentials,
      [event.target.name]: event.target.value,
    });
  };

  const handleLogin = () => {
    if (credentials.username === "admin" && credentials.password === "admin") {
      setIsAuthenticated(true);
    } else {
      alert("Invalid credentials! Try again.");
    }
  };

  return (
    <div className="h-screen flex items-center justify-center bg-black-900 text-white ">
      <div className="bg-white/10 p-6 rounded-lg shadow-lg text-center w-80 border border-white/40 shadow-[10px_15px_15px_2px_rgba(0,0,0,0.5)] ">
        <h2 className="text-xl font-bold mb-4 opacity-80 ">Admin Login</h2>
        <input type="text" name="username" value={credentials.username} onChange={handleChange} placeholder="Username" className="mb-2 p-2 w-full rounded text-white border border-white/40 shadow-[3px_6px_15px_2px_rgba(0,0,0,0.5)] mt-[10px]"/>
        <input type="password" name="password" value={credentials.password} onChange={handleChange} placeholder="Password" className="mb-2 p-2 w-full rounded text-white border border-white/40 shadow-[3px_6px_15px_2px_rgba(0,0,0,0.5)] mt-[10px]"/>
        <button onClick={handleLogin} className="w-25 h-10 bg-green-600 px-4 py-2 rounded-xl hover:bg-green-600 cursor-pointer mt-[15px] shadow-[3px_6px_15px_2px_rgba(0,0,0,0.5)] mt-[10px]">Login</button>
      </div>
    </div>
  );
};

export default AdminPage;
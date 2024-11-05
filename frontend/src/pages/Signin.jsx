import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
const apiUrl = import.meta.env.VITE_API_URL;

function Signin() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignIn = async () => {
    try {
      console.log(username, password);
      const response = await axios.post(`${apiUrl}/user/signin`, {
        username,
        password,
      });

      // Save token to local storage and navigate
      localStorage.setItem("token", response.data.token);
      navigate("/dashboard");
    } catch (error) {
      console.error("Error signing in:", error);
    }
  };

  return (
    <div className=' w-full flex justify-center items-center bg-cyan-200'>
      <div className='p-2 m-2 bg-slate-100 w-1/2 rounded-lg'>
        <div className='text-center'>
          <h1 className='font-black'>Sign In</h1>
          <p className='text-gray-700'>Enter your credentials to access your account</p>
        </div>
        <div className='flex justify-center'>
          <form action="">
            <div>
              <h3>Email</h3>
              <input type="text" placeholder='johndoe@gmail.com' onChange={(e) => { setUsername(e.target.value); }} required />
            </div>
            <div>
              <h3>Password</h3>
              <input type="text" placeholder='*******' onChange={(e) => { setPassword(e.target.value); }} required />
            </div>
          </form>
        </div>
        <div className='grid justify-center m-4'>
          <button className='p-2 w-full bg-blue-900 text-white rounded-md' onClick={handleSignIn}>Sign In</button>
          <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
        </div>
      </div>
    </div>
  )
}



export default Signin
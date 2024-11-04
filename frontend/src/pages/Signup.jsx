import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
Link
import axios from "axios";

function Signup() {

  const [firstName,setFirstName] = useState("");
  const [lastName,setLastName] = useState("");
  const [username,setUsername] = useState("");
  const [password,setPassword] = useState("");
  const navigate = useNavigate();
  

  const handleSignUp = async () => {
    try {
      console.log(username, password);
      const response = await axios.post("http://localhost:3000/api/v1/user/signup",{
        username,
        password,
        firstName,
        lastName
      });
    
      localStorage.setItem("token",response.data.token);
      navigate("/signin");
    } catch (error) {
      console.error("Error signing in:", error);
    }
  };



  return (
    <div className='min-h-screen w-full flex justify-center items-center bg-cyan-200'>
      <div className='p-2 m-2 bg-slate-100 w-1/2 rounded-lg'>
        <div className='text-center'>
          <h1 className='font-black'>Sign Up</h1>
          <p className='text-gray-700'>Enter your information to create an account</p>
        </div>
        <div className='flex justify-center'>
          <form action="">
            <div>
              <h3>First Name</h3>
              <input type="text" placeholder='John' label={"First Name"} onChange={(e)=>{setFirstName(e.target.value)}} required/>
            </div>
            <div>
              <h3>Last Name</h3>
              <input type="text" placeholder='Doe' label={"Last Name"} onChange={(e)=>{setLastName(e.target.value)}} required/>
            </div>
            <div>
              <h3>Email</h3>
              <input type="text" placeholder='johndoe@gmail.com' label={"Email"} onChange={(e)=>{setUsername(e.target.value)}} required/>
            </div>
            <div>
              <h3>Password</h3>
              <input type="text" placeholder='*******' label={"Password"} onChange={(e)=>{setPassword(e.target.value)}} required/>
            </div>
          </form>
        </div>
        <div className='grid justify-center m-4'>
          <button onClick={handleSignUp} className='p-2 w-full bg-blue-900 text-white rounded-md' label={"Sign up"}>Sign Up</button>
          <p>Already have an account? <Link to="/signin">Login</Link></p>
        </div>
      </div>
    </div>
  )
}


export default Signup
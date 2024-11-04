import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Users from '../components/Users';

function Dashboard() {

  const [balance, setBalance] = useState(0);
  const [lastName, setLastName] = useState("");
  const [firstName, setFirstName] = useState("");


  useEffect(() => {

    const fetchAccount = async () => {
      try {
        const token = localStorage.getItem("token"); // Assuming token is stored in localStorage
        const res = await axios.get("http://localhost:3000/api/v1/account/balance", {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        console.log(res.data);
        setBalance(res.data.balance);
        setFirstName(res.data.firstName);
        setLastName(res.data.lastName);

      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchAccount();
  }, []);


  return (
    <div>
      <div className='flex justify-between my-2 bg-cyan-300'>
        <div className='flex text-xl font-bold items-center'>
          Payments App
        </div>
        <div className='flex '>
          <div className='m-1'>
            Hello, {firstName ? firstName[0].toUpperCase() + firstName.slice(1) : ""} {lastName ? lastName[0].toUpperCase() + lastName.slice(1) : ""}
          </div>
          <div className="w-6 h-6 bg-gray-300 text-slate-600 rounded-full flex items-center justify-center font-bold">
            {firstName?firstName[0].toUpperCase():""}
          </div>
        </div>
      </div>
      <hr />
      <div >
        <div className='text-lg font-bold '>
          Your Balance ₹ {balance}
        </div>
        <Users />
      </div>
    </div>
  )
}

export default Dashboard;
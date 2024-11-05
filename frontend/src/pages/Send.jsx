import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom';
import TransferSuccess from '../components/TransferSuccess';
const apiUrl = import.meta.env.VITE_API_URL;

function Send() {

  const navigate = useNavigate();

  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  const name = searchParams.get("name");

  const [amount, setAmount] = useState(0);
  const [istransferSuccessful, setIsTransferSuccessful] = useState(false);

  const transaction = async () => {
    try {

      const res = await axios.post(`${apiUrl}/account/transfer`, {
        to: id,
        amount
      }, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token")
        }
      });

      console.log(res.data, name);
      setIsTransferSuccessful(true);
    } catch (error) {
      console.error("Error fetching users:", error);
    }

    // navigate(-1);
  }

  if (istransferSuccessful) {
    return <TransferSuccess id={id} name={name} amount={amount} />
  }

  return (
    <div className='bg-cyan-100 flex justify-center'>
      <div className='bg-white my-4 p-4 py-2 grid justify-center items-center w-1/2 rounded'>
        <h1>Send Money</h1>
        <div className='flex justify-start items-center'>
          <div className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center font-bold">
            {name[0]}
          </div>
          <div className='text-lg font-semibold mx-2'>{name}
          </div>
        </div>
        <div className='grid py-4 justify-center text-center'>
          <p className='font-semibold'>Amount (in ₹)</p>

          <input className='mb-2 p-2 rounded-sm border border-slate-400 focus:outline-none focus:ring-2' type="text" placeholder='Enter Amount' onChange={(e) => setAmount(e.target.value)} required />

          <button className='bg-green-500 w-full p-3 border border-green-500 text-white focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-600 font-bold rounded' onClick={transaction}>Initiate Transfer</button>
        </div>
      </div>
    </div>
  )
}

export default Send
import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function TransferSuccess({ id, name, amount }) {
  const navigate = useNavigate();

  return (
    <div className="bg-green-100 flex justify-center items-center min-h-screen">
      <div className="bg-white p-8 rounded shadow-lg w-80 text-center">
        <h2 className="text-2xl font-bold text-green-600 mb-4">Transaction Successful!</h2>
        <p className="text-lg">
          You sent <span className="font-bold">₹{amount}</span> to <span className="font-bold">{name}</span>.
        </p>
        <button
          onClick={() =>{navigate(-1)}}
          className="mt-6 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 focus:outline-none"
        >
          Send Again
        </button>
      </div>
    </div>
  )
}

import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
const apiUrl = import.meta.env.VITE_API_URL;


export default function Users() {

    const [users, setUsers] = useState([]);
    const [filter, setFilter] = useState("");

    useEffect(() => {

        const fetchUsers = async () => {
            try {
                const res = await axios.get(`${apiUrl}/user/bulk?filter=` + filter);
                setUsers(res.data.user);
            } catch (error) {
                console.error("Error fetching users:", error);
            }
        };

        fetchUsers();
    }, [filter]);

    return (<div>
        <div className='text-lg font-bold m-4'>
            🔎 Search Users ...
        </div>
        <div className='m-4'>
            <input className='w-full p-2 border border-gray-300 focus:outline-none focus:ring-2 rounded' type="text" placeholder='Search Users...' onChange={(e) => { setFilter(e.target.value); }} />
        </div>
        <div>
            {users.map((user) => <User key={user._id} user={user} />)}
        </div>
    </div>

    )
}

function User({ user }) {
    const navigate = useNavigate();
    const fullName = user.firstName[0].toUpperCase() + user.firstName.slice(1) + " " + user.lastName[0].toUpperCase() + user.lastName.slice(1);

    return (
        <div className='flex justify-between' >
            <div className='flex m-2'>
                <div className="w-6 h-6 bg-gray-300 text-slate-600 rounded-full flex items-center justify-center font-bold">
                    {user.firstName[0].toUpperCase()}
                </div>
                <div className='m-1 font-semibold'>
                    {fullName}
                </div>
            </div>
            <button className='h-9 bg-blue-900 text-white rounded' onClick={() => { navigate("/send?id=" + user._id + "&name=" + fullName) }} >Send Money</button>
        </div>
    )
}

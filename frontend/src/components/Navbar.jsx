import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Navbar() {

    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("token");
        setIsAuthenticated(!!token);
    }, [isAuthenticated])

    const handleLogout = () => {
        localStorage.removeItem("token");
        setIsAuthenticated(false);
        navigate("/signin");
    }

    return (
        <div className='bg-blue-900'>
            <nav className='flex justify-around items-center -my-2'>
                <div >
                    <img className='w-18 h-10 ' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR363BO6LXUKGXXHiOTaHnqqDXgwpw4qOeOoA&s" alt="" />
                </div>
                <ul>
                    {isAuthenticated ? (
                        <>
                            <Link to="/dashboard"><button type="button" class="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Dashboard</button></Link>

                            <button type="button" class="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2" onClick={handleLogout}>
                                Logout
                            </button>
                            
                        </>
                    ) : (
                        <>
                            <Link to="/signup">
                                <button type="button" class="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Signup</button>
                            </Link>

                            <Link to="/signin"><button type="button" class="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Signin</button></Link>

                        </>)}




                    
                </ul>
            </nav>
        </div>
    )
}

export default Navbar
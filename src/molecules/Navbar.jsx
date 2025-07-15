import React, { useState } from 'react'
import { CiMenuFries } from "react-icons/ci"
import { AiOutlineClose } from "react-icons/ai";
import { FiPlusSquare } from "react-icons/fi";
import { Link } from 'react-router-dom'

export default function Navbar() {
    const [isClicked, setIsClicked] = useState(false)
    const handleClick = () => {
        setIsClicked(!isClicked);
      };
  return (
    <div>
       <nav className='fixed top-0 left-0 w-full bg-white z-50 flex items-center justify-between p-3 lg:p-5 lg:px-16 shadow-md'> 
        <div className=''>
        <span className='text-blue-900 text-3xl lg:text-4xl font-bold'>PTB BLOG</span>
        
        </div>

         <div className=''>
            <ul className='hidden lg:flex gap-12 items-center'>
                <li>Home</li>
                <li>About</li>
                <li>Category</li>
                <li>Services</li>

                <div>
                <Link to="/landing"><button className='bg-blue-400 p-2 text-white px-5 rounded-lg hover:bg-red-500'>Log Out</button></Link>
            </div>
            </ul>
           
         </div>

          <div className='flex items-center gap-5'>
            <FiPlusSquare className='text-3xl'/>
          {isClicked ? <AiOutlineClose onClick={handleClick} className='lg:hidden text-3xl'/> : <CiMenuFries onClick={handleClick} className='lg:hidden text-3xl'/>} 
          </div>
       </nav>

       <ul onClick={handleClick} className= {isClicked ? 'fixed top-0 left-0 w-full h-[300px] bg-white text-center flex flex-col gap-6 pt-4 px-5 mt-14 lg:hidden z-40' : "hidden"} >
                <li>Home</li>
                <li>About</li>
                <li>Category</li>
                <li>Services</li>

                <div>
                <Link to="/landing"><button className='bg-blue-400 p-1 w-full rounded-md lg:p-2 text-white'>Log Out</button></Link>
            </div>
            </ul>
    </div>
  )
}

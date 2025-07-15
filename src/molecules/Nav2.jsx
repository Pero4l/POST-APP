import React, { useState } from 'react'
import { CiMenuFries } from "react-icons/ci"
import { AiOutlineClose } from "react-icons/ai";
import { Link } from 'react-router-dom'

export default function Nav2() {
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

                <div className='flex flex-col lg:flex-row gap-5'>
                <Link to="/signup"><button className='bg-blue-400 p-2 text-white px-5 rounded-lg hover:bg-blue-100 hover:text-black'>Sign Up</button></Link>

                <Link to="/login"><button className='bg-blue-200 p-1 w-full rounded-md lg:p-2 lg:px-8 text-black hover:bg-blue-400 hover:text-white'>Log In</button></Link>
            </div>
            </ul>
           
         </div>

        {isClicked ? <AiOutlineClose onClick={handleClick} className='lg:hidden text-3xl'/> : <CiMenuFries onClick={handleClick} className='lg:hidden text-3xl'/>} 
       </nav>

       <ul onClick={handleClick} className= {isClicked ? 'fixed top-0 left-0 w-full h-[350px] bg-white text-center flex flex-col gap-6 pt-4 px-5 mt-14 lg:hidden z-40' : "hidden"} >
                <li>Home</li>
                <li>About</li>
                <li>Category</li>
                <li>Services</li>

                <div className='flex flex-col gap-4'>
                <Link to="/signup"><button className='bg-blue-400 p-1 w-full rounded-md lg:p-2 text-white'>Sign Up</button></Link>

                <Link to="/login"><button className='bg-blue-400 p-1 w-full rounded-md lg:p-2 text-white'>Log In</button></Link>
            </div>
            </ul>
    </div>
  )
}

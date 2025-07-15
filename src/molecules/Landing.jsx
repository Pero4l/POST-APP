import React from 'react'
import animation from "/animation.jpeg"
import { Link } from 'react-router-dom'
import Nav2 from './Nav2'

export default function Landing() {
  return (
    <>
    <Nav2/>
    <div className="flex  justify-center min-h-screen bg-gradient-to-r from-blue-100 to-blue-200">
    <div className="bg-white shadow-lg rounded-xl w-full  p-8">

        <img className='lg:w-[700px] mt-10 lg:relative left-[550px]' src={animation} alt="" />

      <h2 className="text-2xl lg:text-4xl font-bold text-center text-blue-600 mb-6 mt-10">
        Welcome to PTB BLOG
      </h2>

      <p className='lg:text-xl text-lg text-center mt-5 text-gray-600'><em>Your daily does of Insight, where ideas find a Voice</em></p>
 
     
     <Link to="/signup"><button className=' text-center border-2 border-blue-500 rounded-lg p-2 hover:bg-blue-500 hover:text-white mt-24 transition duration-200 bg-white w-full'>Sign Up</button></Link>

   

    
     <Link to="/login"> <button className='bg-blue-500 w-full text-center text-white p-2 rounded-lg mt-4 hover:bg-blue-100 hover:text-black transition duration-200'>Log In</button></Link>
     


    </div>
  </div>
  </>
  )
}

import React from 'react'
import animation from "/animation.jpeg"
import { useQuery } from "@tanstack/react-query";
import Nav2 from './Nav2'
import Footer from './Footer';

export default function Landing() {

  const { data, isLoading, isError } = useQuery({
    queryKey: ["posts"],
    queryFn: () =>
      fetch("https://test.blockfuselabs.com/api/posts").then((res) =>
        res.json()
      ),
  });

  if (isLoading) return <p className="text-center mt-10">Loading posts...</p>;
  if (isError) return <p className="text-center mt-10 text-red-600">Failed to load posts.</p>;

  const posts = Array.isArray(data) ? data : data?.data || [];

  return (
    <>
    <Nav2/>
    <div className="flex  justify-center min-h-screen ">
    <div className="bg-white rounded-xl w-full  p-8">

        <img className='lg:w-[700px] mt-10 lg:relative left-[550px]' src={animation} alt="" />

      <h2 className="text-2xl lg:text-4xl font-bold text-center text-blue-600 mb-6 mt-10">
        Welcome to PTB BLOG
      </h2>

      <p className='lg:text-xl text-lg text-center mt-5 text-gray-600'><em>Your daily does of Insight, where ideas find a Voice</em></p>
 
    </div>
  </div>




  <div className="max-w-7xl mx-auto px-4 -mt-44 py-12">
      <h2 className="lg:text-3xl text-2xl font-bold text-center mb-10 text lg:mb-16 lg:mt-20"> LATEST POSTS</h2>
            
      
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300"
          >
            <img
              src={post.featured_image_url_full || "https://via.placeholder.com/400x300"}
              alt={post.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-5">
              <h4 className="text-xl font-semibold text-gray-800 mb-2">
                {post.title}
              </h4>
              <p className="text-gray-600">{post.body}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    <Footer/>
  </>
  )
}

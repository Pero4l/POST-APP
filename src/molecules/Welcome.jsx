import React from "react";
import { useQuery } from "@tanstack/react-query";

function Welcome() {
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
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center mb-10 text-pink-600">All Posts</h2>
            {/* <h1>{posts.categories.name}</h1> */}
      
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
  );
}

export default Welcome;
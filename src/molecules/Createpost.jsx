import React from 'react'

export default function Createpost() {
  return (
    <div>
      <div>
        <h2 className="text-2xl font-semibold mb-4">Create a New Post</h2>
        <input
          type="text"
          placeholder="Post Title"
          className="w-full border rounded-md p-3 mb-4"
        />
        <textarea
          placeholder="Post Body"
          className="w-full border rounded-md p-3 mb-4"
          rows="5"
        ></textarea>
        <input
          type="text"
          placeholder="Image URL"
          className="w-full border rounded-md p-3 mb-4"
        />
        <button className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition">
          Create Post
        </button>
      </div>
    </div>
  )
}

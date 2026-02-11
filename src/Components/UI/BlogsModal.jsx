import React from 'react'

const BlogsModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="m-4 fixed inset-0  flex items-center justify-center z-50">
        <div className="bg-white p-6 rounded-lg max-w-md w-full text-center">
        {/* <h2 className="text-health-pink text-xl font-bold mb-4">Blogs</h2> */}
        <p className="mb-4">Coming soon!</p>
        <button onClick={onClose} className="bg-health-green text-white px-4 py-2 rounded  hover:bg-green-700 transition">
          Close
        </button>
      </div>
    </div>
  )
}

export default BlogsModal

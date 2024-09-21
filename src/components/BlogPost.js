import React from 'react';

const BlogPost = ({ title, content }) => {
  return (
    <div className="p-4 border rounded shadow-md bg-white">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p>{content}</p>
    </div>
  );
};

export default BlogPost;

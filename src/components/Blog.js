import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import BlogPost from './BlogPost';
import { getBlogPosts, createBlogPost } from '../services/blogServices'; // Ensure you import createBlogPost

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [showAddPost, setShowAddPost] = useState(false);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const data = await getBlogPosts();
      setPosts(data);
    } catch (error) {
      console.error('Failed to fetch posts:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = { title, content };

    try {
      await createBlogPost(data);
      fetchPosts(); // Refresh the blog list
      setTitle('');
      setContent('');
      setShowAddPost(false); // Hide the form after submission
    } catch (error) {
      console.error('Failed to create blog post:', error);
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold text-center mb-6">Blog</h2>
      
      <button 
        onClick={() => setShowAddPost((prev) => !prev)} 
        className="mb-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-200"
      >
        {showAddPost ? 'Cancel' : 'Add New Blog Post'}
      </button>

      {showAddPost && (
        <form onSubmit={handleSubmit} className="p-4 border rounded shadow-lg bg-white mb-6">
          <h3 className="font-semibold mb-2 text-lg">Add a New Blog Post</h3>
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2 mb-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          <textarea
            placeholder="Content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full p-2 mb-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-200"
          >
            Submit
          </button>
        </form>
      )}

      <div className="space-y-4 mt-4">
        {posts.length > 0 ? (
          posts.map((post) => (
            <motion.div
              key={post._id}
              initial={{ opacity: 0, translateY: 20 }}
              animate={{ opacity: 1, translateY: 0 }}
              transition={{ duration: 0.5 }}
            >
              <BlogPost title={post.title} content={post.content} />
            </motion.div>
          ))
        ) : (
          <p>No blog posts available.</p>
        )}
      </div>
    </div>
  );
};

export default Blog;

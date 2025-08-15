import React from 'react';
import BlogCard from '../../components/Ngoc/BlogCard';
import blogData from '../../components/Ngoc/BlogData';

function NewsPage() {
  return (
    <div className="container my-5">
      <h2 className="mb-4 text-center">Latest News & Blogs</h2>
      <div className="row">
        {blogData.map((blog, index) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  );
}

export default NewsPage;

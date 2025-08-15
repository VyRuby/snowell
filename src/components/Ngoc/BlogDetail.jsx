import React from 'react';
import { useParams, Link } from 'react-router-dom';
import blogData from './BlogData';
import BlogCard from './BlogCard';


function BlogDetail() {
  const { id } = useParams();
  const blog = blogData.find(item => item.id.toString() === id);

  if (!blog) {
    return (
      <div className="container my-5">
        <h2>Blog not found</h2>
        <Link to="/news" className="btn btn-secondary mt-3">Back to News</Link>
      </div>
    );
  }

  // Lọc ra các blog khác để gợi ý
const relatedBlogs = blogData.filter(item => item.id.toString() !== id).slice(0, 3);

  return (
    <div className="container my-5">
      <h1>{blog.title}</h1>
      <img src={blog.image} alt={blog.title} className="img-fluid mb-4" />
      {/* Nội dung dài: chia đoạn theo 2 dòng trống */}
        <div
          className="blog-content"
          style={{ lineHeight: 1.8, fontSize: "1.05rem" }}
        >
          {blog.content
            .trim()
            .split(/\n\s*\n/)
            .map((para, idx) => (
              <p key={idx} className="mb-3">
                {para}
              </p>
            ))}
        </div>
        
     
      <small className="text-muted">Date: {blog.date}</small>
      <div className="mt-4">
        <Link to="/news" className="btn btn-secondary">Back to News</Link>
      </div>

      {/* Related Blogs */}
      {relatedBlogs.length > 0 && (
        <div className="mt-5">
          <h3>You may also like</h3>
          <div className="row">
            {relatedBlogs.map(blog => (
              <BlogCard key={blog.id} blog={blog} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default BlogDetail;

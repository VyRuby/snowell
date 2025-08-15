import React from 'react';
import { Link } from 'react-router-dom';

function BlogCard({blog }) {
  return (
    <div className="col-12 col-md-6 col-lg-4 mb-4">
      <div className="card h-100">
        <img src={blog.image} className="card-img-top" alt={blog.title} />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{blog.title}</h5>
          <p className="card-text">{blog.description}</p>
          <small className="text-muted mt-auto">Date: {blog.date}</small>
          <Link to={`/news/${blog.id}`} className="btn btn-primary mt-auto">Read More</Link>
        </div>
      </div>
    </div>
  );
}

export default BlogCard;

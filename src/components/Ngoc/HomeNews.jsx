// components/NewsPromotion.js
import React from 'react';
import { Link } from 'react-router-dom';
import blogData from './BlogData';

function HomeNews(){
  return (
     <div className="bg-light p-3 rounded shadow-sm" style={{ minHeight: "194px" }}>
      {/* Hiển thị 3 tin mới nhất */}
      {blogData.slice(0, 3).map((blog) => (
        <div className="d-flex align-items-center mb-3" key={blog.id}>
          <img
            src={blog.image}
            alt={blog.title}
            width="48"
            height="48"
            className="me-2 rounded"
            style={{ objectFit: "cover" }}
          />
          <div>
            <div>
              <Link to={`/news/${blog.id}`} className="text-dark text-decoration-none">
                <strong>{blog.title}</strong>
              </Link>
            </div>
            <small className="text-muted">date {blog.date}</small>
          </div>
        </div>
      ))}

      {/* See More */}
      <div className="mt-3 text-end">
        <Link to="/news" className="text-primary text-decoration-underline">
          See More...
        </Link>
      </div>
    </div>
  );
}

export default HomeNews;

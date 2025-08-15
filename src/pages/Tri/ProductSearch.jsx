import React, { useState } from 'react';
import productsData from '../../data/products.json';

// Helper to handle Google Drive links & relative/local paths
const getImageUrl = (imagePath) => {
  if (!imagePath) return '/placeholder.jpg';

  // If already full URL and NOT Google Drive
  if (imagePath.startsWith('http') && !imagePath.includes('drive.google.com')) {
    return imagePath;
  }

  // Detect Google Drive link
  if (imagePath.includes('drive.google.com')) {
    let fileId = '';

    // Format 1: /file/d/FILE_ID/view
    const match1 = imagePath.match(/\/d\/([^/]+)\//);
    if (match1) fileId = match1[1];

    // Format 2: id=FILE_ID
    const match2 = imagePath.match(/id=([^&]+)/);
    if (!fileId && match2) fileId = match2[1];

    if (fileId) {
      return `https://drive.google.com/uc?export=view&id=${fileId}`;
    }
  }

  // Assume relative path → public/images
  return `/${imagePath}`;
};

const ProductSearch = ({ products, onViewDetails }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOption, setSortOption] = useState('default');
  const [statusFilter, setStatusFilter] = useState('All');

  const handleSearch = (event) => setSearchTerm(event.target.value);
  const handleSortChange = (event) => setSortOption(event.target.value);
  const handleStatusFilter = (status) => setStatusFilter(status);

  let filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'All' || product.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  if (sortOption === 'low') {
    filteredProducts.sort((a, b) => a.price - b.price);
  } else if (sortOption === 'high') {
    filteredProducts.sort((a, b) => b.price - a.price);
  }

  return (
    <div>
      {/* Filters */}
      <div className="d-flex justify-content-between align-items-center mb-3 flex-wrap">
        {/* Status Filter */}
        <div className="mb-2 mb-md-0">
          <button
            className={`btn rounded-pill me-2 ${statusFilter === 'All' ? 'btn-primary' : 'btn-outline-primary'}`}
            onClick={() => handleStatusFilter('All')}
          >
            All
          </button>
          <button
            className={`btn rounded-pill me-2 ${statusFilter === 'Newest' ? 'btn-primary' : 'btn-outline-primary'}`}
            onClick={() => handleStatusFilter('Newest')}
          >
            Newest
          </button>
          <button
            className={`btn rounded-pill ${statusFilter === 'Best Sellers' ? 'btn-primary' : 'btn-outline-primary'}`}
            onClick={() => handleStatusFilter('Best Sellers')}
          >
            Best Sellers
          </button>
        </div>

        {/* Search + sort */}
        <div className="d-flex">
          <input
            type="text"
            className="form-control rounded-pill me-2"
            placeholder="Search products..."
            value={searchTerm}
            onChange={handleSearch}
          />
          <select
            className="form-select rounded-pill"
            value={sortOption}
            onChange={handleSortChange}
          >
            <option value="default">Sort by: Price</option>
            <option value="low">Low to High</option>
            <option value="high">High to Low</option>
          </select>
        </div>
      </div>

      {/* Product Grid */}
      <div className="row g-3">
        {filteredProducts.map(product => (
          <div key={product.id} className="col-12 col-sm-6 col-md-4">
            <div className="card h-100 text-center">
              <img
                src={getImageUrl(product.image)}
                alt={product.name}
                className="card-img-top p-3"
                style={{ height: '150px', objectFit: 'contain' }}
              />
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="fw-bold">${product.price}</p>
                <button
                  className="btn btn-primary rounded-pill"
                  onClick={() => onViewDetails(product)}
                >
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductSearch;

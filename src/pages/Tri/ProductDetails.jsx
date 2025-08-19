import React from "react";
import Carousel from "react-bootstrap/Carousel";


export default function ProductDetails({ product, onClose }) {
  if (!product) return null;

  const formatKey = (key) =>
    key
      .split('_')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');

  const renderValue = (value) => {
    if (Array.isArray(value)) {
      return (
        <ul>
          {value.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      );
    }
    return value?.toString() || 'N/A';
  };

  return (
    <div
      className="modal fade show"
      style={{ display: "block", background: "rgba(0,0,0,0.5)" }}
      onClick={onClose}
    >
      <div
        className="modal-dialog modal-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{product.name}</h5>
            <button type="button" className="btn-close" onClick={onClose}></button>
          </div>

          <div className="modal-body">
            {/* Wrapper để gắn badge đè lên Carousel */}

            <div className="position-relative">
              {/* Badge động */}
              {product.status?.toLowerCase().includes("best sellers") && (
                <span
                  className="badge bg-danger position-absolute"
                  style={{ top: "15px", left: "15px", zIndex: 2 }}
                >
                  Best Seller
                </span>
              )}
              {product.status?.toLowerCase().includes("newest") && (
                <span
                  className="badge bg-success position-absolute"
                  style={{ top: "15px", left: "15px", zIndex: 2 }}
                >
                  New
                </span>
              )}

            {/* Carousel */}
            <Carousel>
              {product.images && product.images.length > 0 ? (
                product.images.map((img, idx) => (
                  <Carousel.Item key={idx}>
                    <img
                      className="d-block w-100"
                      src={img}
                      alt={`Slide ${idx}`}
                      style={{ height: "300px", objectFit: "contain" }}
                    />
                  </Carousel.Item>
                ))
              ) : (
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={(product.image)}
                    alt="Product"
                    style={{ height: "300px", objectFit: "contain" }}
                  />
                </Carousel.Item>
              )}
            </Carousel>
             </div>

            {/* Product Info */}
            <h4 className="mt-3">{product.name}</h4>
            <table className="table table-bordered mt-3">
              <tbody>
                {Object.entries(product).map(([key, value], idx) => {
                  if (['images', 'details', 'image', 'status'].includes(key)) {
                    return null;
                  }
                  return (
                    <tr key={idx}>
                      <th>{formatKey(key)}</th>
                      <td>{renderValue(value)}</td>
                    </tr>
                  );
                })}
                {product.details && Object.keys(product.details).length > 0 &&
                  Object.entries(product.details).map(([key, value], idx) => (
                    <tr key={`details-${idx}`}>
                      <th>{formatKey(key)}</th>
                      <td>{renderValue(value)}</td>
                    </tr>
                  ))
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

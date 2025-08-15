import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import productsData from "../../data/products.json";
import ProductDetails from "../../pages/Tri/ProductDetails";

function BestSeller() {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    setProducts(productsData);
  }, []);

  // Lọc Best Seller (không phân biệt hoa thường)
  const bestSellers = products.filter(product =>
    product.status?.toLowerCase().trim() === "best sellers"
  );

  if (bestSellers.length === 0) {
    return <p className="text-center my-5">No best seller products found.</p>;
  }

  return (
    <div className="container my-5">
      <div className="d-flex overflow-auto" style={{ gap: "15px" }}>
        {bestSellers.map(product => (
          <div
            key={product.id}
            className="card"
            style={{ minWidth: "200px", flex: "0 0 auto" }}
          >
            <img
              src={product.image}
              className="card-img-top"
              alt={product.name}
              style={{ height: "150px", objectFit: "cover" }}
            />
            <div className="card-body">
              <h6 className="card-title">{product.name}</h6>
              <p className="card-text">${product.price}</p>
               <button
                className="btn btn-primary btn-sm"
                onClick={() => setSelectedProduct(product)}
              >
                Detail
              </button>
            </div>
          </div>
        ))}
      </div>
       {/* Modal hiển thị khi có sản phẩm được chọn */}
      {selectedProduct && (
        <ProductDetails
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </div>
  );
}

export default BestSeller;

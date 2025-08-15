import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function HomeProductCard({ product }) {
    const [isHovered, setIsHovered] = useState(false);

    const cardStyle = {
        borderRadius: "8px",
        transition: 'transform 0.5s ease, box-shadow 0.3s ease',
        cursor: 'pointer',
        height: '100%',
        transform: isHovered ? "scale(1.05)" : "scale(1)",
        boxShadow: isHovered ? "0 4px 12px rgba(0, 0, 0, 0.1)" : "none",
    };

    const imgStyle = {
        height: "120px",
        objectFit: "contain",
        marginBottom: "10px",
    };

    return (
        <div
            className="card text-center shadow-sm p-2 h-100"
            style={cardStyle}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <img
                src={product.image}
                alt={product.name}
                className="img-fluid mx-auto"
                style={imgStyle}
            />
            <div className="card-body">
                <h6 className="card-title">{product.name}</h6>
                <Link to={`/Products?cat=${encodeURIComponent(product.category)}`}>
                    <button className="btn btn-primary btn-md" style={{ width: '110px' }}>
                        View
                    </button>
                </Link>
            </div>
        </div>
    );
}

import React, { useState, useEffect } from "react";
import productsData from "../../data/products.json";
import ProductDetails from "./ProductDetails";
import ProductSearch from "./ProductSearch";
import ProductCatalogue from "./ProductCatalogue";
import { useLocation } from "react-router-dom";

const categories = [
  { name: "LED and Lightning", sub: [{ name: "LED" }, { name: "CFL" }] },
  { name: "Fans", sub: [{ name: "Standing Fan" }, { name: "A-C Fan" }] },
  { name: "Heater" },
  { name: "Vacuum Cleaner", sub: [{ name: "Handheld" }, { name: "Cordless" }, { name: "Robot" }] },
  { name: "Air Purifier" },
  { name: "Geysers" },
  { name: "Kitchen Appliances" }
];

const normalize = (str) => (str || "").toLowerCase().trim();

const Products = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const categoryFromUrl = queryParams.get("cat");

  const [expanded, setExpanded] = useState({});
  const [selected, setSelected] = useState({});
  const [filteredProducts, setFilteredProducts] = useState(productsData);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    if (categoryFromUrl) {
      setSelected((prev) => ({
        ...prev,
        [categoryFromUrl]: true,
      }));
    }
  }, [categoryFromUrl]);

  const toggleExpand = (category) => {
    setExpanded((prev) => ({
      ...prev,
      [category]: !prev[category],
    }));
  };

  const toggleSelect = (name, subList = []) => {
    setSelected((prev) => {
      const isSelected = !prev[name];
      const newSelected = { ...prev, [name]: isSelected };

      if (!isSelected && subList.length > 0) {
        subList.forEach((sub) => {
          newSelected[sub.name] = false;
        });
      }

      return newSelected;
    });
  };

  useEffect(() => {
    const selectedKeys = Object.keys(selected).filter((key) => selected[key]);

    if (selectedKeys.length === 0) {
      setFilteredProducts(productsData);
    } else {
      setFilteredProducts(
        productsData.filter((product) => {
          const mainCategory = categories.find(
            (cat) =>
              normalize(cat.name) === normalize(product.category) ||
              (cat.sub &&
                cat.sub.some(
                  (sub) => normalize(sub.name) === normalize(product.type)
                ))
          );

          if (!mainCategory) return false;

          const isMainCategorySelected = selectedKeys.includes(mainCategory.name);
          const hasSubcategorySelected =
            mainCategory.sub &&
            mainCategory.sub.some((sub) => selectedKeys.includes(sub.name));
          const isSubcategoryMatch =
            mainCategory.sub &&
            selectedKeys.some(
              (key) => normalize(key) === normalize(product.type)
            );

          if (isMainCategorySelected && !hasSubcategorySelected) return true;
          else if (hasSubcategorySelected) return isSubcategoryMatch;

          return false;
        })
      );
    }
  }, [selected]);

  useEffect(() => {
    if (categoryFromUrl) {
      const foundCat = categories.find(
        (cat) =>
          normalize(cat.name) === normalize(categoryFromUrl) ||
          (cat.sub &&
            cat.sub.some(
              (sub) => normalize(sub.name) === normalize(categoryFromUrl)
            ))
      );

      if (foundCat) {
        if (normalize(foundCat.name) === normalize(categoryFromUrl)) {
          setSelected({ [foundCat.name]: true });
        } else {
          const sub = foundCat.sub.find(
            (sub) => normalize(sub.name) === normalize(categoryFromUrl)
          );
          setSelected({ [foundCat.name]: true, [sub.name]: true });
          setExpanded((prev) => ({ ...prev, [foundCat.name]: true }));
        }
      }
    }
  }, [categoryFromUrl]);

  return (
    <div className="container my-5">
      <div className="row g-4">
        {/* Sidebar */}
        <div className="col-12 col-md-4 col-lg-3">
          <h3>Product Categories</h3>
          <ul className="list-unstyled">
            {categories.map((cat) => (
              <li key={cat.name} className="mb-2">
                <label className="d-flex align-items-center">
                  <input
                    type="checkbox"
                    checked={selected[cat.name] || false}
                    onChange={() => {
                      toggleSelect(cat.name, cat.sub || []);
                      if (cat.sub) toggleExpand(cat.name);
                    }}
                  />
                  <span className="ms-2">{cat.name}</span>
                  {cat.sub && (
                    <button
                      className="btn btn-sm btn-link ms-auto p-0"
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleExpand(cat.name);
                      }}
                    >
                      {expanded[cat.name] ? "▲" : "▼"}
                    </button>
                  )}
                </label>
                {cat.sub && expanded[cat.name] && (
                  <ul className="list-unstyled ms-4">
                    {cat.sub.map((subCat) => (
                      <li key={subCat.name}>
                        <label>
                          <input
                            type="checkbox"
                            checked={selected[subCat.name] || false}
                            onChange={() => toggleSelect(subCat.name)}
                          />
                          <span className="ms-2">{subCat.name}</span>
                        </label>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>

          <ProductCatalogue />
        </div>

        {/* Main Content */}
        <div className="col-12 col-md-8 col-lg-9">
          <h3>Products</h3>
          <ProductSearch
            products={filteredProducts}
            onViewDetails={setSelectedProduct}
          />
        </div>
      </div>

      {selectedProduct && (
        <ProductDetails
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </div>
  );
};

export default Products;

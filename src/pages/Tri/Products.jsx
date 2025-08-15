import React, { useState, useEffect } from "react";
import productsData from "../../data/products.json";
import ProductDetails from "./ProductDetails";
import ProductSearch from "./ProductSearch";
import ProductCatalogue from "./ProductCatalogue";
import { useLocation } from "react-router-dom";

// Categories for filtering products
const categories = [
  { name: "LED and Lightning", sub: [{ name: "LED" }, { name: "CFL" }] },
  { name: "Fans", sub: [{ name: "Standing Fan" }, { name: "A-C Fan" }] },
  { name: "Heater" },
  { name: "Vacuum Cleaner", sub: [{ name: "Handheld" }, { name: "Cordless" }, { name: "Robot" }] },
  { name: "Air Purifier" },
  { name: "Geysers" },
  { name: "Kitchen Appliances" }
];

const normalize = str => (str || "").toLowerCase().trim();

const Products = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const categoryFromUrl = queryParams.get("cat"); // lấy cat từ URL


  const [expanded, setExpanded] = useState({});
  const [selected, setSelected] = useState({});
  const [filteredProducts, setFilteredProducts] = useState(productsData);
  const [selectedProduct, setSelectedProduct] = useState(null);

  

  // Khi mount lần đầu, nếu có cat thì tick luôn category đó
  useEffect(() => {
    if (categoryFromUrl) {
      setSelected(prev => ({
        ...prev,
        [categoryFromUrl]: true
      }));
    }
  }, [categoryFromUrl]);

  const toggleExpand = category => {
    setExpanded(prev => ({
      ...prev,
      [category]: !prev[category]
    }));
  };

  const toggleSelect = (name, subList = []) => {
    setSelected(prev => {
      const isSelected = !prev[name];
      const newSelected = { ...prev, [name]: isSelected };

      // If category is deselected, deselect all its subcategories
      if (!isSelected && subList.length > 0) {
        subList.forEach(sub => {
          newSelected[sub.name] = false;
        });
      }

      return newSelected;
    });
  };

  useEffect(() => {
    const selectedKeys = Object.keys(selected).filter(key => selected[key]);

    if (selectedKeys.length === 0) {
      setFilteredProducts(productsData);
    } else {
      setFilteredProducts(
        productsData.filter(product => {
          // Find the main category for the current product from the `categories` array.
          const mainCategory = categories.find(cat =>
            normalize(cat.name) === normalize(product.category) ||
            (cat.sub && cat.sub.some(sub => normalize(sub.name) === normalize(product.type)))
          );

          // If no main category is found for the product, it shouldn't be included.
          if (!mainCategory) {
            return false;
          }

          // Check if the product's main category is selected.
          const isMainCategorySelected = selectedKeys.includes(mainCategory.name);

          // Check if any subcategory of this product's main category is selected.
          const hasSubcategorySelected = mainCategory.sub && mainCategory.sub.some(sub => selectedKeys.includes(sub.name));

          // Check if the product's type matches any of the selected subcategories.
          const isSubcategoryMatch = mainCategory.sub && selectedKeys.some(key => normalize(key) === normalize(product.type));

          // Filtering Logic
          // If a main category is selected but none of its subcategories are, show all products under that main category.
          if (isMainCategorySelected && !hasSubcategorySelected) {
            return true;
          }
          // If one or more subcategories are selected, show only products whose type matches the selected subcategory.
          else if (hasSubcategorySelected) {
            return isSubcategoryMatch;
          }

          return false;
        })
      );
    }
  }, [selected]);

  // Khi load lần đầu, nếu có ?cat=... thì set selected tương ứng
  useEffect(() => {
    if (categoryFromUrl) {
      const foundCat = categories.find(cat =>
        normalize(cat.name) === normalize(categoryFromUrl) ||
        (cat.sub && cat.sub.some(sub => normalize(sub.name) === normalize(categoryFromUrl)))
      );

      if (foundCat) {
        if (normalize(foundCat.name) === normalize(categoryFromUrl)) {
          // Main category
          setSelected({ [foundCat.name]: true });
        } else {
          // Subcategory
          const sub = foundCat.sub.find(sub => normalize(sub.name) === normalize(categoryFromUrl));
          setSelected({ [foundCat.name]: true, [sub.name]: true });
          setExpanded(prev => ({ ...prev, [foundCat.name]: true }));
        }
      }
    }
  }, [categoryFromUrl]);

  return (
    <div className="container my-5" style={{ display: "flex", flexDirection: "row", gap: "20px" }}>
      {/* Sidebar */}
      <div style={{ width: "250px", padding: "10px" }}>
        <h3>Product Categories</h3>
        <ul style={{ listStyle: "none", paddingLeft: 0 }}  >
          {categories.map(cat => (
            <li key={cat.name} style={{ marginBottom: "5px" }} >
              <label style={{ display: "flex", alignItems: "center" }}>
                <input
                  type="checkbox"
                  checked={selected[cat.name] || false}
                  onChange={() => {
                    toggleSelect(cat.name, cat.sub || []);
                    if (cat.sub) toggleExpand(cat.name);
                  }}
                />
                <span style={{ marginLeft: "8px" }}>{cat.name}</span>
                {cat.sub && (
                  <button
                    style={{
                      marginLeft: "auto",
                      border: "none",
                      background: "transparent",
                      cursor: "pointer"
                    }}
                    onClick={e => {
                      e.stopPropagation();
                      toggleExpand(cat.name);
                    }}
                  >
                    {expanded[cat.name] ? "▲" : "▼"}
                  </button>
                )}
              </label>
              {cat.sub && expanded[cat.name] && (
                <ul style={{ listStyle: "none", paddingLeft: "20px" }} >
                  {cat.sub.map(subCat => (
                    <li key={subCat.name} >
                      <label>
                        <input
                          type="checkbox"
                          checked={selected[subCat.name] || false}
                          onChange={() => toggleSelect(subCat.name)}
                        />
                        <span style={{ marginLeft: "8px" }}>{subCat.name}</span>
                      </label>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>

        <ProductCatalogue />
        {/* Export Buttons */}
      </div>

      {/* Main Content */}
      <div style={{ flex: 1 }}>

        <h3>Products</h3>
        <ProductSearch
          products={filteredProducts}
          onViewDetails={setSelectedProduct}
        />
      </div>

      {/* Product Details Modal */}
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
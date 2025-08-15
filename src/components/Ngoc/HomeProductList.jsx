import React from 'react';
import HomeProductCard from './HomeProductCard';

export default function HomeProductList() {
    // Dữ liệu sản phẩm ghi trực tiếp trong component
    const products = [
        {
            id: 1,
            name: "Electric Fan",       
            category: "Fans", 
            image: process.env.PUBLIC_URL + "/img/Home-Toshiba-fan-standing-FS01.jpg"
        },
        {
            id: 2,
            name: "Vacuum Cleaner",
            category: "Vacuum Cleaner", 
            image: process.env.PUBLIC_URL + "/img/Home-Xiaomi- Vacuum Cleaner-Robot- VR01.jpg"
        },
        {
            id: 3,
            name: "Air Purifier",
            category: "Air Purifier", 
            image: process.env.PUBLIC_URL + "/img/Home-Electrolux-AirPurifier-AP01.jpg"
        },
        {
            id: 4,
            name: "Geysers",
            category: "Geysers", 
            image: process.env.PUBLIC_URL + "/img/Home-Panasonic-WaterHeater-WH01.jpg"
        },
        {
            id: 5,
            name: "LED and Lighting",
            category: "LED and Lightning", 
            image: process.env.PUBLIC_URL + "/img/Home-Light.jpg"
        },
        {
            id: 6,
            name: "Heater",
            category: "Heater", 
            image: process.env.PUBLIC_URL + "/img/Home-Heater.jpg"
        },
        {
            id: 7,
            name: "Kitchen Appliances",
            category: "Kitchen Appliances", 
            image: process.env.PUBLIC_URL + "/img/Home-KitchenApp.jpg"
        }
    ];

    return (
        <div className="container my-5">
            <div className="row justify-content-center">
                {products.map(product => (
                    <div
                        className="col-6 col-sm-4 col-md-3 mb-4"
                        key={product.id}
                    >
                        <HomeProductCard product={product} />
                    </div>
                ))}
            </div>
        </div>
    );
}

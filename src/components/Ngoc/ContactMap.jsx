
import React, { useEffect, useState } from "react";

const Map = () => {
  const [position, setPosition] = useState({ lat: 10.7769, lng: 106.7009 }); // default HCM

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          setPosition({
            lat: pos.coords.latitude,
            lng: pos.coords.longitude
          });
        },
        () => console.warn("Geolocation not allowed")
      );
    }
  }, []);

  const mapUrl = `https://maps.google.com/maps?q=${position.lat},${position.lng}&z=15&output=embed`;

  return (
    <div className="mt-3">
      <iframe
        title="User Location"
        src={mapUrl}
        width="100%"
        height="300"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default Map;

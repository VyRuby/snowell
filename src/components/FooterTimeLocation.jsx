import React, { useState, useEffect } from "react";

function FooterTimeLocation() {
  const [time, setTime] = useState(new Date());

  // Cập nhật thời gian mỗi giây
  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  // Lấy tên thành phố từ trình duyệt (mặc định lấy timeZone name)
  const locationName = Intl.DateTimeFormat(undefined, {
    timeZoneName: "short",
  })
    .format(time)
    .split(" ")
    .slice(-1)[0]; // Lấy phần cuối như GMT+7

  return (
    <div
      className="position-fixed bg-light text-dark rounded-top p-2 "
      style={{
        bottom: 0,
        right: 0,
        zIndex: 1050,
        fontSize: "0.85rem",
        minWidth: "200px",
        textAlign: "center",
      }}
    >
      <div>
        {time.toLocaleDateString(undefined, {
          weekday: "short",
          year: "numeric",
          month: "short",
          day: "numeric",
        })}{" "}
        - {locationName}
      </div>
      <div>{time.toLocaleTimeString()}</div>
    </div>
  );
}

export default FooterTimeLocation;


import React, { useState, useEffect, useRef } from "react";


function VisitorCount() {
    const [count, setCount] = useState(0);
    const [targetCount, setTargetCount] = useState(0);
    const hasIncremented = useRef(false); // cờ kiểm soát

    useEffect(() => {
        if (hasIncremented.current) return; // nếu đã tăng rồi thì không tăng nữa
        hasIncremented.current = true;
        // Giả lập fetch số lượt truy cập (ở thực tế sẽ lấy từ API)
        let savedCount = localStorage.getItem("visitorCount");
        if (!savedCount) {
            savedCount = 0;
        }
        savedCount = parseInt(savedCount, 10) + 1; // tăng 1

        //lưu lại số mới
        localStorage.setItem("visitorCount", savedCount);
        // Set giá trị đích để chạy animation
        setTargetCount(savedCount);
    }, []);

    useEffect(() => {
        if (targetCount > 0) {
            let start = count;
            const step = Math.max(1, Math.ceil((targetCount - start) / 30));
            const interval = setInterval(() => {
                start += step;
                if (start >= targetCount) {
                    start = targetCount;
                    clearInterval(interval);
                }
                setCount(start);
            }, 30); // 30ms mỗi lần cập nhật
        }
    }, [targetCount]);

    return (
        <div
            className="position-fixed bg-light shadow p-2 rounded text-center"
            style={{
                top: "90px",
                right: "15px",
                zIndex: 1050,
                minWidth: "80px",
            }}
        >
            <h6 className="mb-1 text-primary fw-bold" style={{ fontSize: "0.75rem" }}>Visitor Count</h6>
            <p className="mb-0 fs-5 fw-semibold"  style={{ fontSize: "0.75rem" }}>{count.toLocaleString()}</p>
        </div>
    );
}

export default VisitorCount;

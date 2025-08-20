import React, { useState } from "react";

function HomeNewsletter() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email) {
      alert("Please enter your email.");
      return;
    }

    if (!emailRegex.test(email)) {
      alert("Invalid email format. Please enter a valid email.");
      return;
    }

    alert(`Thank you for registering, ${email}!`);
    setEmail("");
  };

  return (
    <div
      className="container justify-content-center p-4 my-4 rounded ms-auto"
      style={{ backgroundColor: "#cce2fa" }}
    >
      <h6 className="fw-bold mb-3 text-center">
        Register to get the hottest Updates and Vouchers from Snowell Electric
      </h6>

      <form className="row g-3 align-items-center justify-content-center" onSubmit={handleSubmit}>
        <div className="col-12 col-md-6">
          <input
            type="email"
            className="form-control"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="col-12 col-md-auto">
          <button type="submit" className="btn btn-primary w-100">
            Register
          </button>
        </div>
      </form>
    </div>
  );
}

export default HomeNewsletter;

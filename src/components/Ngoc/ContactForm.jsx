import React, { useState } from "react";

const ContactForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const validate = () => {
    let newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9]{9,11}$/; // chỉ cho số, từ 9 đến 11 chữ số

    if (!form.name.trim()) {
      newErrors.name = "Full name is required.";
    }

    if (!form.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!emailRegex.test(form.email)) {
      newErrors.email = "Invalid email format.";
    }

    if (!form.phone.trim()) {
      newErrors.phone = "Phone number is required.";
    } else if (!phoneRegex.test(form.phone)) {
      newErrors.phone = "Phone number must be 9-11 digits.";
    }

    if (!form.message.trim()) {
      newErrors.message = "Message is required.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert("Thank you for signing up!");
      setForm({ name: "", email: "", phone: "", message: "" });
      setErrors({});
    }
  };

  return (
    <div className="bg-light p-4 rounded">
      <h5>Sign Up for Updates & Offers</h5>
      <form onSubmit={handleSubmit}>
        {/* Name */}
        <div className="mb-3">
          <input
            type="text"
            name="name"
            className="form-control"
            placeholder="Full name"
            value={form.name}
            onChange={handleChange}
          />
          {errors.name && <small className="text-danger">{errors.name}</small>}
        </div>

        {/* Email */}
        <div className="mb-3">
          <input
            type="email"
            name="email"
            className="form-control"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
          />
          {errors.email && (
            <small className="text-danger">{errors.email}</small>
          )}
        </div>

        {/* Phone */}
        <div className="mb-3">
          <input
            type="text"
            name="phone"
            className="form-control"
            placeholder="Phone"
            value={form.phone}
            onChange={handleChange}
          />
          {errors.phone && (
            <small className="text-danger">{errors.phone}</small>
          )}
        </div>

        {/* Message */}
        <div className="mb-3">
          <textarea
            name="message"
            className="form-control"
            placeholder="Message"
            rows="4"
            value={form.message}
            onChange={handleChange}
          ></textarea>
          {errors.message && (
            <small className="text-danger">{errors.message}</small>
          )}
        </div>

        <button type="submit" className="btn btn-primary w-100">
          Sign up
        </button>
      </form>
    </div>
  );
};

export default ContactForm;

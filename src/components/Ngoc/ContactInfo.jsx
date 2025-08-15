import { FaFacebook, FaInstagram, FaTiktok, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const ContactInfo = () => {
  return (
    <div className="mb-4">
      <h5>Contact Information</h5>

      <p>
        <FaMapMarkerAlt className="me-2 text-primary" />
        <strong>Address:</strong><br />
        20 Nguyen Trai, P12, Q5, HCM city
      </p>

      <p>
        <FaPhoneAlt className="me-2 text-success" />
        <strong>Phone:</strong><br />
        <a href="tel:03930492004" className="text-decoration-none text-dark">
          03930492004
        </a>
      </p>

      <p>
        <FaEnvelope className="me-2 text-danger" />
        <strong>Email:</strong><br />
        <a href="mailto:support@snowellelectric.vn" className="text-decoration-none text-dark">
          support@snowellelectric.vn
        </a>
      </p>

      <p>
        <strong>Social Media:</strong><br />
        <a href="https://facebook.com/snowell" target="_blank" rel="noopener noreferrer" className="me-3">
          <FaFacebook size={20} className="text-primary" />
        </a>
        <a href="https://instagram.com/snowell.electric" target="_blank" rel="noopener noreferrer" className="me-3">
          <FaInstagram size={20} className="text-danger" />
        </a>
        <a href="https://tiktok.com/@snowell_official" target="_blank" rel="noopener noreferrer">
          <FaTiktok size={20} className="text-dark" />
        </a>
      </p>
    </div>
  );
};

export default ContactInfo;

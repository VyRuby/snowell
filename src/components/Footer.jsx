import { FaFacebook, FaInstagram, FaTiktok, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

function Footer() {
    return (
        <footer className="footer bg-light py-4">
            <div className="container">
                <div className="row gy-4">
                    {/* Logo & Slogan */}
                    <div className="col-12 col-md-4 text-center text-md-start">
                        <img
                            src={process.env.PUBLIC_URL + "/img/Logo.png"}
                            alt="Snowell Electric"
                            className="footer-logo mb-2"
                            style={{ height: '50px' }}
                        />
                        <p className="slogan fw-bold mb-0" style={{ color: '#007bff' }}>
                            Convenience from Technology
                        </p>
                    </div>

                    {/* Contact Info */}
                    <div className="col-12 col-md-4 text-center text-md-start">
                        <p className="mb-1 fw-bold"><FaMapMarkerAlt className="me-2" />Address:</p>
                        <p className="mb-1">20 Nguyen Trai, P12, Q5, HCM</p>

                        <p className="mb-1 fw-bold"><FaPhoneAlt className="me-2" />Hotline:</p>
                        <p className="mb-1">1900 4593</p>

                        <p className="mb-1 fw-bold"><FaEnvelope className="me-2" />Email:</p>
                        <p className="mb-1">support@snowell.vn</p>
                    </div>

                    {/* Social Media */}
                    <div className="col-12 col-md-4 text-center text-md-start">
                        <p className="mb-1 fw-bold">Social Media:</p>
                        <p className="mb-1">
                            <FaFacebook className="me-2 text-primary" />
                            Facebook: fb.com/snowell
                        </p>
                        <p className="mb-1">
                            <FaInstagram className="me-2 text-danger" />
                            Instagram: @snowell.electric
                        </p>
                        <p className="mb-1">
                            <FaTiktok className="me-2 text-dark" />
                            Tiktok: @snowell_official
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;

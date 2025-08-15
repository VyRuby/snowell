import { Link } from 'react-router-dom';

 const bannerStyles = {
    backgroundImage: `url(${process.env.PUBLIC_URL + "/img/HomeBanner.png"})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '400px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    color: 'white',
    padding: '0 1rem',
  };

  const headingStyles = {
    fontWeight: 'bold',
    fontSize: '2.5rem',
    margin: '0.5rem 0',
  };

  const buttonStyles = {
    marginTop: '1.5rem',
    padding: '0.6rem 1.5rem',
    fontWeight: '600',
    fontSize: '1rem',
    backgroundColor: '#007bff',
    border: 'none',
    color: 'white',
    borderRadius: '5px',
    textDecoration: 'none',
  };

  // Responsive tweaks
  const responsiveStyles = `
    @media (max-width: 768px) {
      .banner-heading {
        font-size: 1.5rem !important;
      }
      .explore-button {
        font-size: 0.9rem !important;
        padding: 0.5rem 1rem !important;
      }
    }
  `;


function HomeBanner() {
  return (
    <>
    <style>{responsiveStyles}</style>
    
    <div className="banner-container d-flex align-items-center justify-content-center text-center" style={bannerStyles}>
      <div className="text-white px-3">
        <h1 className="banner-heading" style={headingStyles}>MODERN TECHNOLOGY</h1>
        <h1 className="banner-heading" style={headingStyles}>CONVENIENT LIVING</h1>
        <Link to="/Products" className="btn btn-primary mt-4 px-4 py-2 fw-semibold" style={buttonStyles}>
          Explore now
        </Link>
      </div>
    </div>
    </>
  );
  
}

export default HomeBanner;
import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';

function Header() {
  const location = useLocation();

  // Lấy visited pages từ localStorage
  const [visited, setVisited] = useState(() => {
    const saved = localStorage.getItem("visitedPages");
    return saved ? JSON.parse(saved) : [];
  });

  // Cập nhật visited
  const handleVisited = (path) => {
    if (!visited.includes(path)) {
      const newVisited = [...visited, path];
      setVisited(newVisited);
      localStorage.setItem("visitedPages", JSON.stringify(newVisited));
    }
  };

  // Danh sách menu
  const navItems = [
    { to: "/", label: "Home" },
    {
      to: "/Products",
      label: "Products",
      children: [
        { to: "/Products?cat=led and lightning", label: "LED and Lighting" },
        { to: "/Products?cat=fans", label: "Fans" },
        { to: "/Products?cat=heater", label: "Heater" },
        { to: "/Products?cat=vacuum cleaner", label: "Vacuum Cleaner" },
        { to: "/Products?cat=air purifier", label: "Air Purifier" },
        { to: "/Products?cat=geysers", label: "Geysers" },
        { to: "/Products?cat=kitchen appliances", label: "Kitchen" },
        { isDivider: true }, // Đánh dấu chỗ ngăn cách
        { to: "/Products", label: "ALL" }, 
      ],
    },
    { to: "/News", label: "News" },
    { to: "/Aboutus", label: "About Us" },
    { to: "/Contactus", label: "Contact Us" },
  ];

  // Xác định class cho link
  const getLinkClass = (path) => {
    if (location.pathname === path || location.pathname + location.search === path) {
      return "bg-primary text-white rounded px-2";
    } else if (visited.includes(path)) {
      return "bg-light text-dark rounded px-2";
    } else {
      return "text-dark";
    }
  };

  return (
    <header className='shadow-sm bg-white'>
      <nav className="navbar navbar-expand-lg navbar-light px-4 container py-3">
        {/* Logo + Toggle */}
        <div className="d-flex w-25 justify-content-between align-items-center">
          <Link to="/">
            <img
              src={process.env.PUBLIC_URL + "/img/Logo.png"}
              alt="Snowell Electric"
              style={{ height: '50px' }}
            />
          </Link>
          <button
            className="navbar-toggler ms-auto"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>

        {/* Menu */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className='navbar-nav ms-auto'>
            {navItems.map((item, index) => (
              item.children ? (
                <li className="nav-item mx-2 dropdown" key={index}>
                  <Link
                    to={item.to}
                    className={`nav-link dropdown-toggle ${getLinkClass(item.to)}`}
                    id={`dropdown-${index}`}
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    onClick={() => handleVisited(item.to)}
                  >
                    {item.label}
                  </Link>
                  <ul className="dropdown-menu" aria-labelledby={`dropdown-${index}`}>
                    {item.children.map((child, idx) => (
                      <li key={idx}>
                        <Link
                          to={child.to}
                          className={`dropdown-item ${getLinkClass(child.to)}`}
                          onClick={() => handleVisited(child.to)}
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              ) : (
                <li className="nav-item mx-2" key={index}>
                  <Link
                    to={item.to}
                    className={`nav-link ${getLinkClass(item.to)}`}
                    onClick={() => handleVisited(item.to)}
                  >
                    {item.label}
                  </Link>
                </li>
              )
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;

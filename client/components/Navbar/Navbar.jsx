import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header>
      <nav>
        <Link to="/">
          <span className="logo">Motorsport Rentals</span>
        </Link>
        <div className="links">
          <Link to="/cars">Samochody</Link>
          <Link to="/about">O nas</Link>
          <Link to="/login">Zaloguj się</Link>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;

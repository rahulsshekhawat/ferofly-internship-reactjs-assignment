import { GiHamburgerMenu } from "react-icons/gi";
import { MdClear } from "react-icons/md";
import { useState } from "react";
const Navbar = () => {
  const [isClicked, toggleClick] = useState(false);

  const handleClick = () => toggleClick(!isClicked);
  return (
    <nav className="navbar">
      <ul className={isClicked ? "nav-links" : "mobile-nav"}>
        <li className="link">
          <a className="active" href="#">
            HOME
          </a>
        </li>
        <li className="link">
          <a href="#">ABOUT</a>
        </li>
        <li className="link">
          <a href="#">ROOMS</a>
        </li>
        <li className="link">
          <a href="#">SERVICES</a>
        </li>
        <li className="link">
          <a href="#">GALLERY</a>
        </li>
        <li className="link">
          <a href="#">SEE & DO</a>
        </li>
        <li className="link">
          <a href="#">CONTACTS</a>
        </li>
      </ul>
      <div className="navbar-btn">
        <a href="#">
          <button className="btn">Book A Room</button>
        </a>
        <div className="mobile-menu">
          {isClicked ? (
            <GiHamburgerMenu onClick={handleClick} />
          ) : (
            <MdClear onClick={handleClick} />
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-links">
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
        <li className="link">
          <a href="#">
            <button className="btn">Book A Room</button>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

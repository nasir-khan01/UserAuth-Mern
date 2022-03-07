import "../Styles/navbar.css";
import { Link } from "react-router-dom";
const Navbar = ({ setLoginUser }) => {
  return (
    <nav>
      <ul className="list">
        <li className="items">
          <Link to="/details">User profile</Link>
        </li>
        <li>
          <button className="btn" onClick={() => setLoginUser({})}>
            Logout
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

import Logo from "../images/logo.svg";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="flex justify-between px-2 py-2 bg-neutral-900">
      <img className="w-64" src={Logo} alt="logo"></img>
      <div className="flex gap-5 mr-4 text-xl text-gray-300 ">
        <Link to="/">
          <span className="hover:text-stone-100">Home</span>
        </Link>
        <Link to="/history">
          <span className="hover:text-stone-100">History</span>
        </Link>
        <Link to="/payloads">
          <span className="hover:text-stone-100">Payloads</span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

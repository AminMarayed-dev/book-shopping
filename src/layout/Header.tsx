import { Link } from "react-router-dom";
import { localization } from "../constants/localization";
import { FiBook } from "react-icons/fi";

function Header() {
  return (
    <nav className="bg-blue-500 flex items-center justify-center py-4">
      <FiBook className="text-white text-2xl ml-8"/>
      <ul className="flex gap-4 justify-center  py-2 text-white">
        <li className="cursor-pointer">
        <Link to={"/"}>{localization.home}</Link>
        </li>
        <li className="cursor-pointer">
        <Link to={"/about"}>{localization.about}</Link>
        </li>
        <li className="cursor-pointer">
          <Link to={"/contact"}>{localization.contact}</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Header;

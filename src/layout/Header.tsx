import { Link } from "react-router-dom";
import { localization } from "../constants/localization";
import { FiBook } from "react-icons/fi";

function Header() {
  return (
    <div className="flex bg-gradient-to-r to-sky-700 from-indigo-300 justify-between md:flex-row-reverse flex-col items-center px-8 whitespace-nowrap">
      <div className="flex gap-3 items-center">
        <p className="text-white lg:text-2xl md:text-xl  whitespace-nowrap">نشر راشد و داداچام</p>
      <FiBook className="text-white text-[50px] ml-2  "/>
      <input type="text" placeholder="جستجو کتاب" className="rounded-lg pr-3   w-[50%] outline-none h-10"/>
      </div>
      <nav className=" flex items-center justify-center py-4">
      
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
   
    </div>
  );
}

export default Header;

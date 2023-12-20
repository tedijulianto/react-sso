import Navbar from "./Navbar";
import viteLogo from "/vite.svg";
import reactLogo from "../assets/react.svg";
import { FaSearch } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="pb-4 flex items-center justify-between">
      <NavLink to="/">
        <div className="flex items-center gap-2 bg-white p-3 rounded-full">
          <img src={viteLogo} alt="react logo" />
          <p>Logo</p>
        </div>
      </NavLink>

      <div>
        <Navbar />
      </div>

      <div className="flex items-center gap-2 bg-white p-3 rounded-full">
        <form className="relative">
          <FaSearch className="absolute top-[30%] left-3 text-slate-500" />
          <input
            type="text"
            autoComplete="off"
            placeholder="Search"
            className="rounded-full focus:ring-2 focus:ring-slate-200 focus:outline-none bg-slate-100 appearance-none w-full text-sm leading-6 text-slate-500 placeholder-slate-500 py-2 pl-10"
          />
        </form>
        <div className="rounded-full bg-slate-100 p-1">
          <img src={reactLogo} alt="foto" />
        </div>
      </div>
    </header>
  );
};

export default Header;

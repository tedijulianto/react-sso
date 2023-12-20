import { HiHome } from "react-icons/hi";
import { FaCompass } from "react-icons/fa";
import { FaHistory } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { HiTrendingUp } from "react-icons/hi";

const Navbar = () => {
  const Menus = [
    {
      path: "/",
      name: "Home",
      icon: <HiHome />,
    },
    {
      path: "/orders",
      name: "Orders",
      icon: <HiTrendingUp />,
    },
    {
      path: "/employees",
      name: "Employees",
      icon: <FaCompass />,
    },
    {
      path: "/customers",
      name: "Customers",
      icon: <FaHistory />,
    },
  ];

  return (
    <ul className="bg-white rounded-full p-4">
      <div className="flex gap-4">
        {Menus.map((menu, index) => (
          <li key={index} className="">
            <NavLink to={menu.path} activeclassname="active" className="flex items-center gap-2">
              <div className="">{menu.icon}</div>
              <div>{menu.name}</div>
            </NavLink>
          </li>
        ))}
      </div>
    </ul>
  );
};

export default Navbar;

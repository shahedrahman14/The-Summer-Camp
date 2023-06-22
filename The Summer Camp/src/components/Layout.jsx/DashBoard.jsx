import { NavLink, Outlet } from "react-router-dom";
import {
    FaBook,
    FaComment,
    FaHome,
    FaRegCalendarAlt,
    FaShoppingCart,
    FaUsers,
    FaUtensils,
    FaWallet,
  } from "react-icons/fa";
  import { RxHamburgerMenu } from "react-icons/rx";
import useSelectedClass from "../../Hooks/useSelectedClass";

const DashBoard = () => {
    const [selectedClass]=useSelectedClass()
    return (
        <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          {/* Page content here */}
          <Outlet></Outlet>
          <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open DashBoard</label>
        
        </div> 
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
          <ul className="menu p-4 w-80 h-full bg-[#e7dbf8] text-base-content">
            {/* Sidebar content here */}
            <>
               <li>
            <NavLink to="/dashBoard/home">
              <FaHome></FaHome>User Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashBoard/reservations">
              <FaRegCalendarAlt></FaRegCalendarAlt>Reservation
            </NavLink>
          </li>

          <li>
            <NavLink to="/dashBoard/history">
              <FaWallet></FaWallet>Payment History
            </NavLink>
          </li>

          <li className="flex ">
            <NavLink to="/dashBoard/myClass">
              <FaShoppingCart></FaShoppingCart>My Class
              <span className="badge badge-secondary ">+{selectedClass?.length || 0}</span>
            </NavLink>
        
          </li>
          <li>
            <NavLink to="/dashBoard/addReview">
              <FaComment></FaComment>Add Review
            </NavLink>
          </li>

            </>
            <div className="divider"></div>
          <li>
            {" "}
            <NavLink to="/">
              <FaHome></FaHome>Home
            </NavLink>
          </li>
          <li>
            {" "}
            <NavLink to="/classes">
              <RxHamburgerMenu></RxHamburgerMenu> Class
            </NavLink>
          </li>
          </ul>
        
        </div>
      </div>
    );
};

export default DashBoard;
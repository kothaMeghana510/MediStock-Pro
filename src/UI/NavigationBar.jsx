import { NavLink } from "react-router-dom";
import { HiOutlineHome,HiMiniPlus, HiOutlineClock,HiMiniArrowUturnLeft, HiMiniArrowTrendingUp } from "react-icons/hi2";

function NavigationBar() {
    return (
       <nav className="my-5 font-semibold text-lg">
        <ul>
            <li><NavLink className={({isActive}) => `hover:bg-blue-100 flex flex-row gap-3 items-center  w-full p-3 ${isActive ? "active-link transition-colors duration-300" : ""}`} to="/home"><HiOutlineHome /><span>Home</span></NavLink></li>
            <li><NavLink className={({isActive}) => `hover:bg-blue-100 flex flex-row gap-3 items-center  w-full p-3 ${isActive ? "active-link transition-colors duration-300" : ""}`} to="/dashboard"><HiMiniArrowTrendingUp /><span>Dashboard</span></NavLink></li>
            <li><NavLink className={({isActive}) => `hover:bg-blue-100 flex flex-row gap-3 items-center w-full p-3 ${isActive ? "active-link transition-colors duration-300" : ""}`} to="/add-stock"><HiMiniPlus /> <span>Add Stock</span></NavLink></li>
            <li><NavLink className={({isActive}) => `hover:bg-blue-100 flex flex-row gap-3 items-center w-full p-3 ${isActive ? "active-link transition-colors duration-300" : ""}`} to="/pending-orders"><HiOutlineClock /> <span>Pending Orders</span></NavLink></li>
            <li><NavLink className={({isActive}) => `hover:bg-blue-100 flex flex-row gap-3 items-center w-full p-3 ${isActive ? "active-link transition-colors duration-300" : ""}`} to="/returns"><HiMiniArrowUturnLeft /><span>Returns</span></NavLink></li>
        </ul>
       </nav>
    )
}

export default NavigationBar;
import Logout from "../login/Logout";
import ShopTitle from "./ShopTitle";

function Header() {
    return (
        <div className="text-xl  bg-sidebar font-semibold p-3 flex gap-2 text-activeBorder">
            <ShopTitle />
            <Logout />
        </div>
    )
}

export default Header;
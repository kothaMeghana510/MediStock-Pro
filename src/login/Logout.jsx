//import { HiArrowRightOnRectangle } from "react-icons/hi2";
import { useLogout } from "./useLogout";
import LoginSpinner from "./LoginSpinner";

function Logout() {
    const {  logingOut, isLoading } = useLogout(); 

    return (
        <button onClick={logingOut} className="mr-4">
            {(!isLoading) ? <span className="px-2 py-1 text-center bg-activeBorder text-white rounded-lg text-[16px] uppercase font-normal">Logout</span> : <LoginSpinner />}
        </button>
    )
}

export default Logout;
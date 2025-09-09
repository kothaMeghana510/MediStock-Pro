import { HiArrowRightOnRectangle } from "react-icons/hi2";
import { useLogout } from "./useLogout";
import LoginSpinner from "./LoginSpinner";

function Logout() {
    const {  logingOut, isLoading } = useLogout(); 

    return (
        <button onClick={logingOut} className="text-xl mr-4">
            {(!isLoading) ? <HiArrowRightOnRectangle /> : <LoginSpinner />}
        </button>
    )
}

export default Logout;
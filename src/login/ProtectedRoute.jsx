import { useNavigate } from "react-router-dom";
import Loader from "../UI/Loader";
import { useUser } from "./useUser";
 import { useEffect } from "react";

function ProtectedRoute({children}) {
    const navigate = useNavigate();

    // Load the authenticated User
    const { isLoading, isAuthenticated } = useUser();

    // No authenticated user redirect to login page
    useEffect(function() {
        if( !isAuthenticated && !isLoading ) navigate('/login')
    }, 
        [isAuthenticated, isLoading, navigate]
    );

    // While Loading show spinner
    if(isLoading) return <Loader />


    if(isAuthenticated) return children
}

export default ProtectedRoute;
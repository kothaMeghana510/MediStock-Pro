import { useMutation, useQueryClient } from "@tanstack/react-query";
import { logout } from "../services/apiLogin";
import { useNavigate } from "react-router-dom";

export function useLogout() {
    const navigate = useNavigate();
    const queryClient = useQueryClient();
    const {mutate: logingOut, isLoading} = useMutation({
        mutationFn: logout,

        onSuccess: () => {
            queryClient.removeQueries();
            navigate('/login', { replace: true });
        }
    })

    return { logingOut, isLoading };
}
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { loginUsers } from "../services/apiLogin";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export function useLogin() {
    const navigate = useNavigate();
    const queryClient = useQueryClient();
    const {mutate: login, isLoading: loggingIn} = useMutation({
        mutationFn: ({ email, password }) => loginUsers({ email, password }),
        onSuccess: (user) => {
            queryClient.setQueryData(['user'], user.user);
            navigate('/home', { replace: true });
        },

        onError: (err) => {
            console.log(err.message);
            toast.error("Provided email or password are incorrect !");
        }
    })

    return { login, loggingIn };
}
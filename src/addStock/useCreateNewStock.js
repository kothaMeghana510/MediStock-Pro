import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { enterStock } from "../services/apiStock";

export default function useCreateNewStock() {
    const  queryClient = useQueryClient(); 

    const {isLoading: isCreacting, mutate} = useMutation({
        mutationFn: enterStock,
        onSuccess: () => {
            toast.success("Stock Added Successfully");
            queryClient.invalidateQueries({
                queryKey: ["stocks"],
            });
            localStorage.removeItem("drafts");
        },    
        onError: (err) => {toast.error(err.message)}
    });

    return {isCreacting, mutate};
}
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteStock } from "../services/apiStock";

import toast from "react-hot-toast";



// export default function useDeleteStock () {
//     const queryClient = useQueryClient();
    
//     const {isLoading: isDeleting, mutate: deletingStock} =  useMutation({
//         mutationFn: deleteStock,

//         onSuccess: () => {
//             const showToast = true
//             if(showToast) toast.success("Stock deleted successfully");
//             queryClient.invalidateQueries({
//                 queryKey: ['stocks'],
//             });
//         },

//         onError: (err) => toast.error(err.message)
//     });

//     return {isDeleting, deletingStock};
// }

export default function useDeleteStock ({showToast= true} = {}) {
    const queryClient = useQueryClient();
    const {isLoading: isDeleting, mutate: deletingStock} =  useMutation({
        mutationFn: deleteStock,

        onSuccess: () => {
            if(showToast) toast.success("Stock deleted successfully");
            queryClient.invalidateQueries({
                queryKey: ['stocks'],
            });
        },

        onError: (err) => toast.error(err.message)
    });

    return {isDeleting, deletingStock};
}
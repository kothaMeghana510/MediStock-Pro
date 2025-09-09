import { useMutation, useQueryClient } from "@tanstack/react-query";
import {deleteReceivedStock} from "../services/apiReceivedStock";
import toast from "react-hot-toast";

export default function useDeleteReceived({showToast = true} = {}) {
   const queryClient = useQueryClient();
    const {mutate: deletingStockReceived} = useMutation({
        mutationFn: deleteReceivedStock,
        
        onSuccess: () => {
            if(showToast) toast.success("Stock deleted Successfully")
            queryClient.invalidateQueries({
                queryKey: ['receivedStocks'],
            })
        },

        onError: (err) => (toast.error(err.message))
    });

    return {deletingStockReceived};
}
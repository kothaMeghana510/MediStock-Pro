import { useQuery } from "@tanstack/react-query";
import { getReturnStock } from "../services/apiReturnStocks";


export default function useReturnStocks() {
    const {isLoading, data: returnStocks} = useQuery({
            queryKey: ['returnStocks'],
            queryFn: getReturnStock
        })

        return {isLoading, returnStocks}
}
import { useSearchParams } from "react-router-dom";
import dateHelper from "./dateHelper";
import { useQuery } from "@tanstack/react-query";
import { stockAfterDate } from "../services/apiReceivedStock";
import { pendingStockAfterDate } from "../services/apiStock";
import { returnStockAfterDate } from "../services/apiReturnStocks";

export default function useDashboardData() {
     const [ searchParams ] = useSearchParams();
        const periodOfStocks = searchParams.get('date') || 'today';
        const startDate = dateHelper(periodOfStocks);
        
        const {data: receivedData, isLoading} = useQuery({
            queryKey: ["receivedStocks", periodOfStocks],
            queryFn: () => stockAfterDate(startDate),
        });

        const {data: pendingData} = useQuery({
            queryKey: ["stocks", periodOfStocks],
            queryFn: () => pendingStockAfterDate(startDate),
        });

        const {data: returnedData} = useQuery({
            queryKey: ["returnStocks", periodOfStocks],
            queryFn: () => returnStockAfterDate(startDate),
        });
    
        return {receivedData, isLoading, pendingData, returnedData}
        
}


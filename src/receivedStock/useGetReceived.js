import { useQuery } from "@tanstack/react-query";
import { getReceivedStocks } from "../services/apiReceivedStock";

export default function useGetReceived() {
    const { isLoading: isReceiving, data: dashboardStocks } = useQuery({
            queryKey: ['receivedStocks'],
            queryFn: getReceivedStocks,
        });

        return {isReceiving, dashboardStocks};
}
import ReceivedStockTable from "./ReceivedStockTable";
import Loader from "../UI/Loader";
import FilterSection from "./FilterSection";
import useGetReceived from "./useGetReceived";

function ReceivedStock() {
     const {isReceiving, dashboardStocks} = useGetReceived();

    if(isReceiving) return <Loader/>

    return (
        <>
        <FilterSection />
        <div className="flex flex-col justify-center items-center">
            <ReceivedStockTable dashboardStocks={dashboardStocks} />
        </div>
        </>
    )
}

export default ReceivedStock;
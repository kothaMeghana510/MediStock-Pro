import ReturnItem from "./ReturnItem";
import EmptyReturns from "./EmptyReturns";
import useReturnStocks from "./useReturnStocks";
import Loader from "../UI/Loader"


function ReturnStocks() {
    const {isLoading, returnStocks} = useReturnStocks();

     if(isLoading) {
        return <Loader />
    }

    if(!returnStocks || returnStocks.length === 0) {
        return <EmptyReturns />
    }

    return (
        <>
            <h1 className="uppercase font-extrabold text-2xl mx-2 px-2 py-1 text-stone-600">Returned Stocks</h1>
            <div className="px-20 flex flex-col gap-5 mt-4">
                {returnStocks?.map((returnItem, index) => <ReturnItem returnItem={returnItem} key={index} />)}
            </div>
        </>
    )
}

export default ReturnStocks;
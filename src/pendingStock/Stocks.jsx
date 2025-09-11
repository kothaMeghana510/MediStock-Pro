import { useQuery } from "@tanstack/react-query";
import { getStock } from "../services/apiStock";
import Loader from "../UI/Loader";
import StockTable from "./StockTable";
import { HiCalendarDays, HiOutlineSparkles } from "react-icons/hi2";

function Stocks() {
    const { isLoading, data: stocks } = useQuery({
        queryKey: ['stocks'],
        queryFn: getStock,
    });
    if(isLoading) return <Loader />

    const groupedStocks = stocks.reduce((acc, stock) => {
        const dateObj = new Date(stock.created_at);

        const date = dateObj.toISOString().split("T")[0];

        if (!acc[date]) acc[date] = [];
        acc[date].push(stock);
        return acc;
    }, {});

    // const sortedDates = Object.keys(groupedStocks).sort(
    //     (a, b) => new Date(b) - new Date(a)
    // );

    const sortedDates = Object.keys(groupedStocks).sort((a, b) => {
        // const [dayA, monthA, yearA] = a.split("/").map(Number);
        // const [dayB, monthB, yearB] = b.split("/").map(Number);

        return new Date(b) - new Date(a);
    });

    const isLatest = sortedDates[0];

    return (
    <div>
        <h1 className="uppercase font-extrabold text-2xl mx-2 px-2 py-1 text-stone-600">Pending Orders</h1>
    {sortedDates.map((date, idx) => {
        const stocksForDate = groupedStocks[date];
        return (
                <div key={idx} className=" flex flex-col m-10">
                    <div className="flex items-center">
                        <h2 className={"font-bold text-[18px] text-stone-500 m-2 flex gap-3 items-center "}><span><HiCalendarDays /></span>{date}</h2>
                        {date === isLatest ? <span className="ml-auto font-bold text-[18px] bg-gradient-to-r from-blue-500 to-indigo-500 p-2 rounded-xl text-white flex items-center gap-2 animate-pulse duration-2000"><HiOutlineSparkles />Latest</span> : ""}
                    </div>
                    <StockTable stocks={stocksForDate} sortedDates={sortedDates} isLatest={isLatest} date={date} />
                </div>
            );
        })}

  </div>
    )
}

export default Stocks;


// function Stocks() {
//     const { isLoading, data: stocks } = useQuery({
//         queryKey: ['stocks'],
//         queryFn: getStock,
//     });
//     if(isLoading) return <Loader />

//     const groupedStocks = stocks.reduce((acc, stock) => {
//         const date = new Date(stock.created_at).toLocaleDateString();
//          if (!acc[date]) acc[date] = [];
//         acc[date].push(stock);
//         return acc;
//     }, {});

//     // const sortedDates = Object.keys(groupedStocks).sort(
//     //     (a, b) => new Date(b) - new Date(a)
//     // );

//     const sortedDates = Object.keys(groupedStocks).sort((a, b) => {
//         const [dayA, monthA, yearA] = a.split("/").map(Number);
//         const [dayB, monthB, yearB] = b.split("/").map(Number);

//         return new Date(yearB, monthB - 1, dayB) - new Date(yearA, monthA - 1, dayA);
//     });

//     const isLatest = sortedDates[0];

//     return (
//     <div>
//         <h1 className="uppercase font-extrabold text-2xl mx-2 px-2 py-1 text-stone-600">Pending Orders</h1>
//     {sortedDates.map((date, idx) => {
//         const stocksForDate = groupedStocks[date];
//         return (
//                 <div key={idx} className=" flex flex-col m-10">
//                     <div className="flex items-center">
//                         <h2 className={"font-bold text-[18px] text-stone-500 m-2 flex gap-3 items-center "}><span><HiCalendarDays /></span>{date}</h2>
//                         {date === isLatest ? <span className="ml-auto font-bold text-[18px] bg-gradient-to-r from-blue-500 to-indigo-500 p-2 rounded-xl text-white flex items-center gap-2 animate-pulse duration-2000"><HiOutlineSparkles />Latest</span> : ""}
//                     </div>
//                     <StockTable stocks={stocksForDate} sortedDates={sortedDates} isLatest={isLatest} date={date} />
//                 </div>
//             );
//         })}

//   </div>
//     )
// }

// export default Stocks;



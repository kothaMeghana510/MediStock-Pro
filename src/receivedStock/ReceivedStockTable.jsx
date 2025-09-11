import Empty from "../UI/Empty";
import ReceivedStockRow from "./ReceivedStockRow";
import { useState } from "react";
import ReturnForm from "../ReturnStocks/ReturnForm";
import useReceivedStock from "./useReceivedStock";

function ReceivedStockTable({dashboardStocks}) {
    const [showReturnForm, setShowReturnForm] = useState(false);
    const [returnStock, setReturnStock] = useState(null);
    const { finalStocks, lengthOfNearExpiry, expiredLen} = useReceivedStock({dashboardStocks});
   
    if(!dashboardStocks || dashboardStocks?.length === 0 ) {
      return <Empty  /> 
    }
    
    console.log(finalStocks);

        return (
          <>
          {/* {(lengthOfNearExpiry) ? <h2 className="font-semibold text-red-600 bg-red-300 border-l-4 rounded-md px-4 py-2 border-red-600 mr-auto ml-5 text-lg animate-pulse duration-1000 ">{`${lengthOfNearExpiry} Medicines are near to Expire`}</h2>: ""} */}
          <div className="flex gap-5 text-[16px] mt-2 font-bold animate-pulse duration-1000">
            <span className="bg-red-300 text-red-600 px-2 py-1 rounded-md">{`🔴 Expired = ${expiredLen}`}</span> 
            <span className="bg-orange-300 text-orange-600 px-2 py-1 rounded-md">{`🟠 Near to Expiry = ${lengthOfNearExpiry}`}</span>
          </div>
            <table className="min-w-full m-10 mt-8 table-fixed border-collapse border border-gray-100">
            <thead>
            <tr className="uppercase h-10  bg-active font-semibold">
                <td className="px-4 py-2 text-center">S.NO.</td>
                <td className="px-4 py-2 text-center">Medicine Name</td>
                <td className="px-4 py-2 text-center">Quantity</td>
                <td className="px-4 py-2 text-center">Amount</td>
                <td className="px-4 py-2 text-center">Expiry Date</td>
                <td className="px-4 py-2 text-center">Batch No.</td>
                <td className="px-10 py-2 ">Manage</td>
            </tr>
            </thead>
            <tbody>
                {finalStocks?.map((dashboardStock, index) => <ReceivedStockRow  dashboardStock={dashboardStock} key={dashboardStock.id} index={index}   setShowReturnForm={setShowReturnForm} showReturnForm={showReturnForm} returnStock={returnStock} setReturnStock={setReturnStock}  />)}
            </tbody>
            </table>
            

            {showReturnForm && 
                    <div className="fixed inset-0 bg-black/30 backdrop-blur-sm bg-opacity-50  flex items-center justify-center z-50">
                      <div className="bg-white rounded-xl shadow-lg p-6  relative">
                        <button onClick={() => setShowReturnForm(false)} className="absolute top-3 right-3 text-gray-500 hover:text-gray-800">✕</button>            
                        <ReturnForm  returnStock={returnStock} setShowReturnForm={setShowReturnForm} finalStocks={finalStocks}/>
                      </div>
                    </div>
            }
            </>
    )
}

export default ReceivedStockTable;



// import Empty from "../UI/Empty";
// import ReceivedStockRow from "./ReceivedStockRow";
// import { useState } from "react";
// import ReturnForm from "../ReturnStocks/ReturnForm";
// import useReceivedStock from "./useReceivedStock";



// function ReceivedStockTable({dashboardStocks}) {
//     const [showReturnForm, setShowReturnForm] = useState(false);
//     const [returnStock, setReturnStock] = useState(null);
//     const [isReturned, setIsReturned] = useState(false);

//     const { finalStocks, lengthOfNearExpiry} = useReceivedStock({dashboardStocks});


//     if(!dashboardStocks || dashboardStocks?.length === 0 ) {
//       return <Empty  /> 
//     }


//         return (
//             <>
//                 {(lengthOfNearExpiry) ? <h2 className="font-semibold text-red-600 bg-red-300 border-l-4 rounded-md px-4 py-2 border-red-600 mr-auto ml-5 text-lg bg-">{`${lengthOfNearExpiry} Medicines are near to Expire`}</h2>: ""}
//             <table className="min-w-full m-10 mt-8 table-fixed border-collapse border border-gray-100">
//             <thead>
//             <tr className="uppercase h-10  bg-active font-semibold">
//                 <td className="px-4 py-2 text-center">S.NO.</td>
//                 <td className="px-4 py-2 text-center">Medicine Name</td>
//                 <td className="px-4 py-2 text-center">Quantity</td>
//                 <td className="px-4 py-2 text-center">Amount</td>
//                 <td className="px-4 py-2 text-center">Expiry Date</td>
//                 <td className="px-4 py-2 text-center">Batch No.</td>
//             </tr>
//             </thead>
//             <tbody>
//                 {finalStocks?.map((dashboardStock, index) => <ReceivedStockRow dashboardStock={dashboardStock} key={dashboardStock.id} index={index}   setShowReturnForm={setShowReturnForm} showReturnForm={showReturnForm} returnStock={returnStock} setReturnStock={setReturnStock} isReturned={isReturned} />)}
//             </tbody>
//             </table>

//             {showReturnForm && 
//                     <div className="fixed inset-0 bg-black/30 backdrop-blur-sm bg-opacity-50  flex items-center justify-center z-50">
//                       <div className="bg-white rounded-xl shadow-lg p-6  relative">
//                         <button onClick={() => setShowReturnForm(false)} className="absolute top-3 right-3 text-gray-500 hover:text-gray-800">✕</button>            
//                         <ReturnForm  returnStock={returnStock} isReturned={isReturned} setIsReturned={setIsReturned} />
//                       </div>
//                     </div>
//             }
//             </>
//     )
// }

// export default ReceivedStockTable;




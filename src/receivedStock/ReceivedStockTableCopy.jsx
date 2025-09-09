//import { useSearchParams } from "react-router-dom";

import Empty from "../UI/Empty";
import ReceivedStockRow from "./ReceivedStockRow";
import { useState } from "react";
import ReturnForm from "../ReturnStocks/ReturnForm";
import useReceivedStock from "./useReceivedStock";


function ReceivedStockTable({dashboardStocks}) {
    //const [searchParams] = useSearchParams();
    const [showReturnForm, setShowReturnForm] = useState(false);
    const [returnStock, setReturnStock] = useState(null);

    const { finalStocks, lengthOfNearExpiry} = useReceivedStock({dashboardStocks});
  // const filterValue = searchParams.get('category') || 'All';
  //  let filteredStock;
  //  if(filterValue === 'All') filteredStock = dashboardStocks;
  //  if(filterValue === 'Tablets') filteredStock = dashboardStocks.filter((stock) => stock.category === 'Tablets');
  //  if(filterValue === 'Capsules') filteredStock = dashboardStocks.filter((stock) => stock.category === "Capsules");
  //  if(filterValue === 'Syrups') filteredStock = dashboardStocks.filter((stock) => stock.category === "Syrups");
  //  if(filterValue === 'Injections') filteredStock = dashboardStocks.filter((stock) => stock.category === 'Injections');
  //  if(filterValue === 'Ointments') filteredStock = dashboardStocks.filter((stock) => stock.category === "Ointments");
   
  // function getNearToExpiry(expiry) {
  //   const today = new Date();
  //   const expiryDate = new Date(expiry);
  //   const diffTime = expiryDate - today;
  //   return Math.ceil(diffTime / (1000 * 60 * 60 *24));
  // }

  // const stocksWithDays = filteredStock.map((stock) => {
  //   const daysLeft = getNearToExpiry(stock.expiryDate)
  //   return {
  //       ...stock, 
  //       daysLeft,
  //       isExpiringSoon: daysLeft <= 7 && daysLeft > 0,
  //       alreadyExpired: daysLeft <= 0,
  //   }
  // });

//   const nearExpiry = stocksWithDays.filter((stock) => stock.daysLeft <= 7 && stock.daysLeft > 0);
//   const lengthOfNearExpiry = nearExpiry.length;

//   const DateValue = searchParams.get('date') || 'none';
//   let finalStocks = stocksWithDays;

//   if(DateValue === 'none') finalStocks = stocksWithDays;

// if (DateValue === 'nearToExpiry') {
//   finalStocks = stocksWithDays.filter((stock) => stock.isExpiringSoon);
// }

// if (DateValue === 'alreadyExpired') {
//   finalStocks = stocksWithDays.filter((stock) => stock.daysLeft <= 0);
// }
// console.log(finalStocks)


if(!dashboardStocks || dashboardStocks?.length === 0 ) {
     return <Empty  /> 
  }


        return (
            <>
                {(lengthOfNearExpiry) ? <h2 className="font-semibold text-red-600 bg-red-300 border-l-4 rounded-md px-4 py-2 border-red-600 mr-auto ml-5 text-lg bg-">{`${lengthOfNearExpiry} Medicines are near to Expire`}</h2>: ""}
            <table className="min-w-full m-10 mt-8 table-fixed border-collapse border border-gray-100">
            <thead>
            <tr className="uppercase h-10  bg-active font-semibold">
                <td className="px-4 py-2 text-center">S.NO.</td>
                <td className="px-4 py-2 text-center">Medicine Name</td>
                {/* <td className="px-4 py-2 text-center">Category</td> */}
                <td className="px-4 py-2 text-center">Quantity</td>
                <td className="px-4 py-2 text-center">Amount</td>
                <td className="px-4 py-2 text-center">Expiry Date</td>
                <td className="px-4 py-2 text-center">Batch No.</td>
            </tr>
            </thead>
            <tbody>
                {finalStocks?.map((dashboardStock, index) => <ReceivedStockRow dashboardStock={dashboardStock} key={dashboardStock.id} index={index} isExpiringSoon={dashboardStock.isExpiringSoon} alreadyExpired={dashboardStock.alreadyExpired} setShowReturnForm={setShowReturnForm} showReturnForm={showReturnForm} returnStock={returnStock} setReturnStock={setReturnStock} />)}
            </tbody>
            </table>

            {showReturnForm && 
                    <div className="fixed inset-0 bg-black/30 backdrop-blur-sm bg-opacity-50  flex items-center justify-center z-50">
                      <div className="bg-white rounded-xl shadow-lg p-6  relative">
                        <button onClick={() => setShowReturnForm(false)} className="absolute top-3 right-3 text-gray-500 hover:text-gray-800">✕</button>            
                        <ReturnForm  returnStock={returnStock}/>
                      </div>
                    </div>
                        }
            </>
    )
}

export default ReceivedStockTable;

function ReceivedStockTable({dashboardStocks}) {
    const [showReturnForm, setShowReturnForm] = useState(false);
    const [returnStock, setReturnStock] = useState(null);

    const { finalStocks, lengthOfNearExpiry} = useReceivedStock({dashboardStocks});


    if(!dashboardStocks || dashboardStocks?.length === 0 ) {
      return <Empty  /> 
    }


        return (
            <>
                {(lengthOfNearExpiry) ? <h2 className="font-semibold text-red-600 bg-red-300 border-l-4 rounded-md px-4 py-2 border-red-600 mr-auto ml-5 text-lg bg-">{`${lengthOfNearExpiry} Medicines are near to Expire`}</h2>: ""}
            <table className="min-w-full m-10 mt-8 table-fixed border-collapse border border-gray-100">
            <thead>
            <tr className="uppercase h-10  bg-active font-semibold">
                <td className="px-4 py-2 text-center">S.NO.</td>
                <td className="px-4 py-2 text-center">Medicine Name</td>
                <td className="px-4 py-2 text-center">Quantity</td>
                <td className="px-4 py-2 text-center">Amount</td>
                <td className="px-4 py-2 text-center">Expiry Date</td>
                <td className="px-4 py-2 text-center">Batch No.</td>
            </tr>
            </thead>
            <tbody>
                {finalStocks?.map((dashboardStock, index) => <ReceivedStockRow dashboardStock={dashboardStock} key={dashboardStock.id} index={index}   setShowReturnForm={setShowReturnForm} showReturnForm={showReturnForm} returnStock={returnStock} setReturnStock={setReturnStock} />)}
            </tbody>
            </table>

            {showReturnForm && 
                    <div className="fixed inset-0 bg-black/30 backdrop-blur-sm bg-opacity-50  flex items-center justify-center z-50">
                      <div className="bg-white rounded-xl shadow-lg p-6  relative">
                        <button onClick={() => setShowReturnForm(false)} className="absolute top-3 right-3 text-gray-500 hover:text-gray-800">✕</button>            
                        <ReturnForm  returnStock={returnStock}/>
                      </div>
                    </div>
            }
            </>
    )
}

export default ReceivedStockTable;


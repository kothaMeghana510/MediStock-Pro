//import {useDeleteReceived} from "./useDeleteReceived";
import { HiOutlineTrash } from "react-icons/hi2";
import useDeleteReceived from "./useDeleteReceived";

function ReceivedStockRow({dashboardStock, index, setShowReturnForm, showReturnForm, setReturnStock}) {
    const {id, medicineName, quantity, category, expiryDate, amount, batchNo, daysLeft, isExpiringSoon, alreadyExpired} = dashboardStock;
    const { deletingStockReceived } = useDeleteReceived();
    function returnForm(stock){
        setShowReturnForm(!showReturnForm);
        setReturnStock(stock)
    }
    const expiry = new Date(expiryDate);
    const year = expiry.getFullYear();
    const month = expiry.getMonth() + 1;
    const date = expiry.getDate();
    const formattedExpiryDate = `${date}/${month}/${year}`
    console.log(formattedExpiryDate)
    
        return (
            <>
            <tr className={`h-10 border-b border-gray-10  ${alreadyExpired ? "bg-red-100 text-gray-500 opacity-60 " : ""} `}>
            <td className="px-4 py-2 text-center">{index+1}.</td>
            <td className="px-4 py-2 text-center font-semibold uppercase text-lg">{medicineName}<span className=" text-stone-400 flex justify-center text-sm">{category}</span></td>
            <td className="px-4 py-2 text-center text-lg">{quantity}</td>
            <td className="px-4 py-2 text-center font-semibold text-green-600 text-lg">{amount} ₹</td>
            {/* <td className={`px-4 py-2 text-center font-semibold text-lg`}><span className={`${isExpiringSoon || alreadyExpired ? "bg-red-300 text-red-600  font-semibold rounded-xl px-2 py-1" : "bg-green-300 rounded-xl px-2 py-1 text-green-600"}`}>{formattedExpiryDate}</span>{isExpiringSoon ? <span className="flex justify-center text-red-400 font-semibold text-sm uppercase">{`${daysLeft} ${daysLeft===1 ? "day Left" : "days Left"}`}</span> : ""}</td> */}
            <td className={`px-4 py-2 text-center font-semibold text-lg`}><span className={` font-semibold rounded-xl px-2 py-1 ${alreadyExpired ? "bg-red-300 text-red-600" : isExpiringSoon  ? "bg-orange-300 text-orange-600 " : "bg-green-300  text-green-600"}` }>{formattedExpiryDate}</span>{isExpiringSoon ? <span className="flex justify-center text-orange-400 font-semibold text-sm uppercase">{`${daysLeft} ${daysLeft===1 ? "day Left" : "days Left"}`}</span> : ""}</td>

            <td className="px-4 py-2 text-center text-gray-500">{batchNo ? batchNo : "-"}</td>
            <td>
                
            <button className="px-4 py-2  text-center " onClick={() => deletingStockReceived(id)}><HiOutlineTrash /></button>
            {(alreadyExpired) ? <span className="px-2 py-1 text-center bg-red-600 text-lg text-white rounded-lg">Expired</span> : <button onClick={() => returnForm(dashboardStock)} className="px-2 py-1 text-center bg-activeBorder  text-white rounded-lg">Add to Returns</button>}
            </td>
        </tr>
            </>
    )
}

export default ReceivedStockRow;

// function ReceivedStockRow({dashboardStock, index, setShowReturnForm, showReturnForm, setReturnStock, returnStock, isReturned}) {
//     const {medicineName, quantity, category, expiryDate, amount, batchNo, daysLeft, isExpiringSoon, alreadyExpired} = dashboardStock;

//     function returnForm(stock){
//         setShowReturnForm(!showReturnForm);
//         setReturnStock(stock)
//     }
//     console.log(returnStock);
//     console.log(isReturned)
    
//         return (
//             <>
//         <tr className={`"h-10 border-b border-gray-10" ${alreadyExpired ? "bg-red-100 text-gray-500 opacity-60 " : ""} `}>
//             <td className="px-4 py-2 text-center">{index+1}.</td>
//             <td className="px-4 py-2 text-center font-semibold uppercase">{medicineName}<span className=" text-stone-400 flex justify-center text-sm">{category}</span></td>
//             <td className="px-4 py-2 text-center">{quantity}</td>
//             <td className="px-4 py-2 text-center font-semibold text-green-600">{amount} ₹</td>
//             <td className={`px-4 py-2 text-center `}><span className={`${isExpiringSoon ? "bg-red-300 text-red-600 font-semibold rounded-xl px-2 py-1" : ""}`}>{expiryDate}</span>{isExpiringSoon ? <span className="flex justify-center text-red-400 font-semibold text-sm uppercase">{`${daysLeft} ${daysLeft===1 ? "day Left" : "days Left"}`}</span> : ""}</td>
//             <td className="px-4 py-2 text-center">{batchNo}</td>
//             <td>
                
//             <button className="px-4 py-2 text-center">Delete</button>
//             {(alreadyExpired) ? "" : <button onClick={() => returnForm(dashboardStock)} className="px-2 py-1 text-center bg-activeBorder rounded-lg text-white">Return</button>}
//             </td>
//         </tr>
//             </>
//     )
// }

// export default ReceivedStockRow;
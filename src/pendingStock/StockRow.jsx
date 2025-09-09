import useDeleteStock from "./useDeleteStock";
import { HiOutlineTrash, HiPlus } from "react-icons/hi2";

function StockRow({stock, index, onSelectStock}){
    const {id: id, medicineName, quantity, category} = stock;
    const {isDeleting, deletingStock} = useDeleteStock();

    return (
        <tr className="h-10 border-b border-gray-10">
            <td className="px-4 py-2 text-center">{index+1}.</td>
            <td className="px-4 py-2 text-center font-semibold uppercase text-lg">{medicineName}</td>
            <td className="px-4 py-2 text-center text-lg">{quantity}</td>
            <td className="px-4 py-2 text-center">{category}</td>
            <button className="px-4 py-2 text-center" onClick={() => deletingStock(id)} disabled={isDeleting} ><HiOutlineTrash /></button>
            <button onClick={onSelectStock} ><HiPlus /></button>
        </tr>
    )
}

export default StockRow;


// import useDeleteStock from "./useDeleteStock";

// function StockRow({stock, index}){
//     const {id: id, medicineName, quantity, category} = stock;
//     const {isDeleting, deletingStock} = useDeleteStock();

//     return (
//         <tr className="h-10 border-b border-gray-10">
//             <td className="px-4 py-2 text-center">{index+1}.</td>
//             <td className="px-4 py-2 text-center font-semibold">{medicineName}</td>
//             <td className="px-4 py-2 text-center">{quantity}</td>
//             <td className="px-4 py-2 text-center">{category}</td>
//             <button className="px-4 py-2 text-center" onClick={() => deletingStock(id)} disabled={isDeleting} >Delete</button>
//             <button onClick={() => setShowModel((show) => !show)}></button>
//         </tr>
//     )
// }

// export default StockRow;
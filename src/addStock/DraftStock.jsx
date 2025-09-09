import { HiOutlineTrash } from "react-icons/hi2";

function DraftStock ({draft, index, handleDeleteStock}) {
    const {medicineName: medicineName, quantity, category} = draft;
    return (
        <tr className="h-10 border-b border-gray-10">
            <td className="px-4 py-2 text-center">{index+1}.</td>
            <td className="px-4 py-2 text-center font-semibold uppercase text-lg">{medicineName}</td>
            <td className="px-4 py-2 text-center text-lg">{quantity}</td>
            <td className="px-4 py-2 text-center">{category}</td>
            <button onClick={() => handleDeleteStock(index)} className="p-2 mx-5 text-blackfont-semibold rounded-md"><HiOutlineTrash /></button>
        </tr>
    )
}

export default DraftStock;
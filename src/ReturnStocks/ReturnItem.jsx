function ReturnItem({
    returnItem: {
        returnQuantity,
        medicineName,
        returnReason,
        created_at: returnDate,
        receivedQuantity,
        amount,
    }
})
{
    const itemReturnDate = new Date(returnDate);
    const year = itemReturnDate.getFullYear();
    const month = itemReturnDate.getMonth() + 1;
    const date = itemReturnDate.getDate();
    const formattedDate = `${date}/${month}/${year}`;


    return (
        <div className="bg-white px-10 py-2 rounded-2xl shadow-md border-l-4 border-cyan-500 mb-4">
            <div className="flex justify-between mt-2 text-lg">
                <h1 className="font-semibold text-xl uppercase text-gray-800">{medicineName}</h1>
                <p className="text-lg text-green-500 border-2 rounded-full border-green-400 px-1 shadow-md shadow-green-300"><span className="font-semibold my-6">Amount: </span><span className="font-extrabold">{amount}</span></p>
            </div>
            <p className="text-lg text-gray-500"><span className="text-lg font-semibold my-6">Reason: </span>{returnReason}</p>
            <p className="text-lg text-gray-500"><span className="text-lg font-semibold my-6">Return Date: </span>{formattedDate}</p>
            <div className="flex justify-between mt-2 text-lg">
                <span className="font-medium text-gray-700"><span className="font-semibold">Received Quantity :</span> {receivedQuantity}</span>
                <span className="font-medium text-gray-700"><span className="font-semibold">Returned Quantity: </span>{returnQuantity}</span>
            </div>
        </div>
    )
}

export default ReturnItem;


{/* <div className="bg-white px-4 py-2 rounded-2xl shadow-md border-l-4 border-cyan-500 mb-4">
            <div className="flex flex-row gap-10">
                <h1 className="font-semibold text-xl uppercase text-gray-800">{medicineName}</h1>
                <p className="font-normal ml-auto text-lg flex gap-2"><span className="font-semibold">Received Quantity:</span> {receivedQuantity}</p>
                <p className="font-normal ml-auto text-lg "><span className="font-semibold">Return Quantity: </span>{returnQuantity}</p>
            </div>
            <p className="text-lg text-gray-500"><span className="text-lg font-semibold my-6">Reason: </span>{returnReason}</p>
            <p className="text-lg text-gray-500"><span className="text-lg font-semibold my-6">Return Date: </span>{formattedDate}</p>
            
        </div> */}
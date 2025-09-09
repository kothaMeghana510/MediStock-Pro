//import { useState } from "react";
import { useState } from "react";
import StockRow from "./StockRow"; 
import Model from "./Model";
import RowModel from "./RowModel";



function StockTable({stocks, isLatest, date}) {
    const [showModel, setShowModel] = useState(false);
    const [selectedStock, setSelectedStock] =  useState(null);
    //const [ShowRowModel, setShowRowModel] = useState(false);

    return (
        <>
            <table className={`table-fixed border-collapse border border-gray-100 ${date === isLatest ? "ring-2 ring-indigo-400 rounded-lg" : ""}`}>
            <thead>
            <tr className="uppercase h-10  bg-active font-semibold">
                <td className="px-4 py-2 text-center">S. NO.</td>
                <td className="px-4 py-2 text-center">Medicine Name</td>
                <td className="px-4 py-2 text-center">Quantity</td>
                <td className="px-4 py-2 text-center">Category</td>
                <td className="">Manage</td>

            </tr>
            </thead>
            <tbody className="bg-table">
                {stocks.map((stock, index) => <StockRow stock={stock} index={index} key={stock.id} onSelectStock={() => setSelectedStock(stock)} />)}
            </tbody>
       </table>
            <div className="flex justify-end">
                <button type= "button" onClick={() => setShowModel((show) => !show)} className=" m-3 px-4 py-2 mx-5 bg-cyan-500 text-white font-semibold rounded-md">Receive All</button>
            </div>
            
            {selectedStock && (
                <div className="fixed inset-0 bg-black/30 backdrop-blur-sm bg-opacity-50  flex items-center justify-center z-50">
                    <div className="bg-white rounded-xl shadow-lg p-6  relative">
                        <button  onClick={() => setSelectedStock(null)} className="absolute top-3 right-3 text-gray-500 hover:text-gray-800">✕</button>
                        <RowModel stock={selectedStock} setShowRowModel={() => setSelectedStock(null)} />
                    </div>
                    </div>
            )}

            {showModel && 
                <div className="fixed inset-0 bg-black/30 backdrop-blur-sm bg-opacity-50  flex items-center justify-center z-50">
                    <div className="bg-white rounded-xl shadow-lg p-6  relative">
                        <button onClick={() => setShowModel(false)} className="absolute top-3 right-3 text-gray-500 hover:text-gray-800">✕</button>
                        <Model stocksToRecieve={stocks} setShowModel={setShowModel} />
                    </div>
                </div>
                }
        </>
    )
}

export default StockTable;
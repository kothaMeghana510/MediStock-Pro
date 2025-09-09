import { HiNoSymbol } from "react-icons/hi2";

function EmptyChart() {
    return (
        <div className="bg-white p-5 mt-10 shadow-md text-lg font-bold ">
            <h1 className='font-semibold text-lg text-stone-600 uppercase mx-2 px-2 py-1'>Stock Categories Overview</h1>
                <p className="flex flex-row gap-1 justify-center items-center"><HiNoSymbol className="text-red-600"/> No data !</p>
        </div>
    )
}

export default EmptyChart;
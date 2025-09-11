import { useNavigate } from "react-router-dom";

function EmptyDashboard() {
    const navigate = useNavigate();
    return (
        <div className="px-5 py-10 flex justify-center flex-col items-center bg-blue-500/20 backdrop-blur-md border border-blue-300/30 rounded-2xl shadow-lg">
            <h1 className="font-semibold text-lg text-gray-800">Looks like there are no stock updates today. Add new stocks to see your progress shine ✨</h1>
            <h1 className=" font-medium text-gray-700">Nothing new today — try switching filters to see this week’s or month’s progress 📊.</h1>
            <button onClick={() => navigate("/add-stock")} className="px-2 py-1 mt-5 text-center bg-activeBorder  text-white rounded-lg ">Add Stock</button>
        </div>
    )
}

export default EmptyDashboard;
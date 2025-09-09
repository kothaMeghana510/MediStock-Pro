import { useSearchParams } from "react-router-dom";

function DashboardFilter() {
     const [searchParms, setSearchParams] = useSearchParams();
            
    function handleClick(value) {
            searchParms.set('date', value);
            setSearchParams(searchParms);
    }
    return (
        <div className="flex gap-3 bg-active  text-lg px-2 py-1 mx-2  ml-auto font-semibold rounded-lg shadow-activeBorder shadow-md ">
            <button className="hover:bg-activeBorder hover:text-white px-2 rounded-lg focus:bg-activeBorder focus:text-white" onClick={() => handleClick('all')}>Today</button>
            <button className="hover:bg-activeBorder hover:text-white px-2  rounded-lg focus:bg-activeBorder focus:text-white" onClick={() => handleClick('week')}>Last 7 days</button>
            <button className="hover:bg-activeBorder hover:text-white px-2 rounded-lg focus:bg-activeBorder focus:text-white" onClick={() => handleClick('month')}>Last 30 days</button>
        </div>
    )
}

export default DashboardFilter;
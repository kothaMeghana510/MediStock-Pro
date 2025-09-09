import { useSearchParams } from "react-router-dom";

function DateFilter() {
    const [searchParms, setSearchParams] = useSearchParams();

    function handleClick(value) {
            searchParms.set('date', value);
            setSearchParams(searchParms);
    }

    return (
          <div className="flex gap-3 bg-active  text-lg px-2 py-1 mx-2  font-semibold rounded-lg shadow-activeBorder shadow-md ">
                <button className="hover:bg-activeBorder hover:text-white px-2  rounded-lg focus:bg-activeBorder focus:text-white" onClick={() => handleClick('nearToExpiry')}>Near To Expiry</button>
                <button className="hover:bg-activeBorder hover:text-white px-2 rounded-lg focus:bg-activeBorder focus:text-white" onClick={() => handleClick('alreadyExpired')}>Expiry</button>
                <button className="hover:bg-activeBorder hover:text-white px-2 rounded-lg focus:bg-activeBorder focus:text-white" onClick={() => handleClick('none')}>All</button>
            </div>
    )
}

export default DateFilter;
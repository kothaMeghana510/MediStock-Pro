import { useSearchParams } from "react-router-dom";


function Filter({ options, value }) {
    const [searchParams, setSearchParams] =  useSearchParams();
    
    function handleChange(e) {
        searchParams.set('category', e.target.value);
        setSearchParams(searchParams);
    }

    return (
        <select value={value} onChange={handleChange} className="focus:bg-activeBorder focus:text-white bg-active font-semibold text-lg px-2 py-1 mx-10 rounded-lg shadow-activeBorder shadow-md focus:ring-2 ring-activeBorder ring-offset-2">
            {options.map((option) => <option value={option.value} key={option.value}>{option.label}</option>)}
        </select>
    )
}

export default Filter;
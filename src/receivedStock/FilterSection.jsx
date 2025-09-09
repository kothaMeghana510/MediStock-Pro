import DateFilter from "./DateFilter";
import TableOperation from "./TableOperation";

function FilterSection() {
    return (
        <div className="flex  px-5 py-2">
                <h1 className="text-2xl font-extrabold text-stone-600 uppercase">Stocks</h1> 
                {/* <span className="ml-auto text-lg font-semibold text-stone-600 mx-5">Filter</span> */}
                <TableOperation />
                <DateFilter />
        </div>
    )
}

export default FilterSection;
import Filter from "./Filter";

function TableOperation() {
    return (
        <div className="ml-auto">
            <Filter options={[
                {value: 'All', label: 'All'},
                {value: 'Tablets', label: 'Tablets'},
                {value: 'Capsules', label: 'Capsules'},
                {value: 'Syrups', label: 'Syrups'},
                {value: 'Injections', label: 'Injections'},
                {value: 'Ointments', label: 'Ointments'},
                {value: 'Others', label: 'Others'},

            ]}/>
        </div>
    )
}

export default TableOperation;
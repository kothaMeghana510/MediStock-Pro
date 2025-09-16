import { HiMiniCurrencyRupee, HiTag, HiOutlineClock, HiMiniArrowUturnLeft } from "react-icons/hi2";
import StatsData from "./StatsData";
import useDashboardData from "./useDashboardData";

function Stats() {
    const { receivedData, pendingData, returnedData } = useDashboardData();

    const checkedReceivedData = receivedData ?? [];
    const checkedPendingData = pendingData ?? [];
    const checkedReturnData = returnedData ?? [];

    const totalStock = checkedReceivedData.length;
    const stockValue = checkedReceivedData.reduce((acc, curr) => acc + curr.amount, 0);
    const pendingOrders = checkedPendingData.length || 0;
    const returnedOrders = checkedReturnData.length;
    return (
        <div className="flex gap-4 justify-center">
            <StatsData icon={<HiTag />} color="blue" iconText="blue" label="Received Stock" value={totalStock} />
            <StatsData icon={<HiMiniCurrencyRupee />} color="green" iconText="green" label="Stock Value" value={`${stockValue} ₹`} />
            <StatsData icon={<HiOutlineClock />} color="purple" iconText="purple" label="Pending Orders" value={pendingOrders} />
            <StatsData icon={<HiMiniArrowUturnLeft />} color="yellow" iconText="yellow" label="Returned Stock" value={returnedOrders}/>
            {/* <StatsData icon={} color="green" label="Total Stock" value="25"/> */}

        </div>
    )
}

export default Stats;
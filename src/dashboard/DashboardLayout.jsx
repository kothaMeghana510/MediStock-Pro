import CategoriesOverview from "./CategoriesOverview";
import EmptyDashboard from "./EmptyDashboard";
import LossEstimation from "./LossEstimation";
import Stats from "./Stats";
import StockOverview from "./StockOverview";
import useDashboardData from "./useDashboardData";

function DashboardLayout() {
    const {receivedData, pendingData, returnedData} = useDashboardData();

    if(!receivedData?.length && !pendingData?.length && !returnedData?.length){
        return <EmptyDashboard />
    }
    return (
        <div>
            <Stats />
            <div className="flex gap-8">
                <StockOverview />
                <LossEstimation />
            </div>
            <CategoriesOverview />
        </div>
    )
}

export default DashboardLayout;
import DashboardFilter from "./DashboardFilter";
import useDashboardData from "./useDashboardData";
import Loader from  "../UI/Loader";
import DashboardLayout from "./DashboardLayout";


function DashboardData() {
   const { isLoading } = useDashboardData();

   if(isLoading) return <Loader />
    return (
        <>
        <div className="flex gap-3 py-4 items-center">
            <h1 className="uppercase font-extrabold text-2xl mx-2 px-2 py-1 text-stone-600">Dashboard</h1>
            <DashboardFilter />
        </div>
           <DashboardLayout />
        </>
    )
}

export default DashboardData;
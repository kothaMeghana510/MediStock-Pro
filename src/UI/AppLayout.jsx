import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";

function AppLayout() {
    return (
        <div className="grid h-screen grid-cols-[20em_1fr] grid-rows-[auto_1fr] gap-1">
            <Header />
            <Sidebar />
            <main className="bg-main p-5">
                <Outlet />
            </main>
        </div>
    )
}

export default AppLayout;
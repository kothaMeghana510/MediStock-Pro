import Heading from "./Heading";
import NavigationBar from "./NavigationBar";

function Sidebar() {
    return (
        <aside className="row-span-full p-8 bg-sidebar ">
           <Heading />
           <NavigationBar/>
        </aside>
    )
}

export default Sidebar;
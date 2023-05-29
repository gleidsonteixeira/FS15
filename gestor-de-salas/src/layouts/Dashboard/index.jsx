import { Outlet } from "react-router-dom";
import Header from "../../components/Header";

const Dashboard = () => {
    return(
        <>
            <Header />
            <Outlet />
        </>
    );
}

export default Dashboard;
import Navbar from "../core/components/Navbar";
import { Outlet } from "react-router-dom";

export default function RootLayout() {
    return (
        <div>
            <Navbar/>
            <div className="container">
                <Outlet/>
            </div>
        </div>
    )
}

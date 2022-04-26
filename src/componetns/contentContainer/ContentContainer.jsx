import { Outlet } from "react-router-dom";

import "./ContentContainer.scss";

import Header from "../header/Header";

export const ContentContainer = () => {
    return(
        <div className="container">
            <Header/>
            <div className="content">
                <Outlet />
            </div>
        </div>
    )
}


import React, { useContext } from "react";
import Header from  "./Header";
import UserStatus from "./UserStatus";
import Menu from "./Menu";
import ApplicationManager from "./ApplicationManager";
import AssignPoints from "./AssignPoints";
import { AppContext } from "../context/Context";
import { isLoggedIn } from "../utils/FormUtils";
import { BrowserRouter } from "react-router-dom";

const Layout = (props) => {
    const { state, setState } = useContext(AppContext);

    return (
        <>
            <div className="row">
                <Header />
                <UserStatus />
            </div>
            <div className="row">
                {(isLoggedIn(state) 
                ? 
                    <Menu /> 
                :   
                <div />)}
            </div>
        </>
    )
}

export default Layout;
import React, { createContext, useState } from "react"

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [state, setState] = useState({
        id: "",
        userName: "",
        name: "",
        token: "",
        role: ""
    });

    return (
        <AppContext.Provider value={{ state, setState }} >
            {children}
        </AppContext.Provider> 
    );
};

export const clearState = () => {
    console.log("clearState called");
    return {
        id: "",
        userName: "",
        name: "",
        token: "",
        role: ""
    };
};

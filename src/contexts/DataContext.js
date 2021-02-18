import { createContext, useState } from "react";

export const DataContext = createContext();

export default function DataProvider(props) {
    
    const values = {

    };

    return (
        <DataContext.Provider value={values}>{props.children}</DataContext.Provider>
    );
}
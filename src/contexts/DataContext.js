import { createContext, useState } from "react";

export const DataContext = createContext();

export default function DataProvider(props) {
    const [dataInput, setDataInput] = useState("");
    
    const handleClick = (value) => {
        if (/\d/.test(value)) {
            setDataInput(dataInput + value);
        } else if (value === "clear") {
            setDataInput("");
        } else if (value === "=") {
            console.log("Calculating...");
            calculate(dataInput);
        } else {
            setDataInput(dataInput + ` ${value} `);
        }
    };

    const calculate = (calculation) => {
        console.log(calculation);
    }

    const values = {
        handleClick,
        dataInput
    };

    return (
        <DataContext.Provider value={values}>{props.children}</DataContext.Provider>
    );
}
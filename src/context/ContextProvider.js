import { useState, createContext } from "react";

export const Context = createContext(false);

const ContextProvider = ({children}) => {
    const [isBlurry, setIsBlurry] = useState(false);

    return (
        <Context.Provider value={{isBlurry, setIsBlurry}}>
            {children}
        </Context.Provider>
    )
}

export default ContextProvider
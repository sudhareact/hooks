import React from "react";
import { useState } from "react";
import Parent from "./Parent";

export const SecretContext = React.createContext({
    secretCode:"",
    snacks:"",
})



const SimpleContext = () => {

    const [secretCode,setSecretCode] = useState<string>("SECRETCODE");

    return <SecretContext.Provider value={{secretCode,snacks:""}}>
       <Parent></Parent>
    </SecretContext.Provider>
    

}

export default SimpleContext;
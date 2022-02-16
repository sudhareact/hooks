import { useContext, useEffect, useState } from "react";
import GrandChild from "./GrandChild";
import { SecretContext } from "./SimpleContext";

const Child = () => {

    const [snacks,setSnacks] = useState<string>("Chips");

    const secretCodeContext = useContext(SecretContext);

    useEffect(()=>{
        secretCodeContext.snacks = snacks;
    },[snacks])


    return (
        <GrandChild></GrandChild>
    )
}

export default Child;
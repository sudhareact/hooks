import { useContext } from "react";
import { SecretContext } from "./SimpleContext";

const GrandChild = () => {
    
    //Fetch the data from context
    const secretCodeContext = useContext(SecretContext);

    return (<>
      <div>{secretCodeContext.secretCode}</div>
        <div>{secretCodeContext.snacks}</div>
    </>
      
    )
}

export default GrandChild;

//useState - will store the data and trigger the render whenever data changes
//useRef - will store the data but will not trigger the render
//useCallback - Just wrapper around the arrow function , to maintain the function reference
//useMemo - derive output based on the inputs (no aync)
//useEffect - any setState task , async task , lifecycle hooks , start timer
     //ngOnit
     //ngUpdate
     //ngDestroy
//useContext - passing the data between components in a loosley coupled way
//

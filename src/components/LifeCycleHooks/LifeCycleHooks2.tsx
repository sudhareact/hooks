import { useCallback, useEffect, useMemo, useState } from "react";

const LifeCycleHooks2 = () => {

    console.log("LifeCycleHooks Render")

    const [claps, setClaps] = useState<number>(0);
    const [like, setLike] = useState<boolean>(false);

    //At the start it will execute
    useEffect(() => {
        console.log("ngOnit 1")
        const timerId = setInterval(() => console.log("timer running"), 1000);

        return () => {
            console.log("ngOnDestroy triggered");
            clearInterval(timerId);
        }
    }, [])
  
    //ngOnit
    useEffect(() => {
        console.log("ngOnit 2")
        return () => {
            console.log("ngOnDestroy triggered 2");
        }
    }, [])

    //ngUpdate
    useEffect(() => {
        console.log("ngUpdate Claps")
    }, [claps])

    //ngUpdate
    useEffect(() => {
        console.log("ngUpdate Like")
        //Server Call
    }, [like])

    //ngUpdate
    useEffect(() => {
        console.log("ngUpdate Like Claps")
        //Server Call
    }, [like, claps])


    const onClapClicked = useCallback(() => {
        //setClaps(claps + 1);
        setClaps((preClaps) => preClaps + 1);
    }, [])

    const toggleLike = useCallback(() => {
        //setLikes(!likes);
        setLike((prevLike) => !prevLike)
    }, []);

    return <div>
        <div>claps : {claps}</div>
        <div>likes : {like ? "unlike" : "like"}</div>
        <button onClick={onClapClicked}>Clap</button>
        <button onClick={toggleLike}>Toggle Like</button>
    </div>
}

export default LifeCycleHooks2;


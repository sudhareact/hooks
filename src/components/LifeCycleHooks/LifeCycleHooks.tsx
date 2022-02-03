import { useCallback, useEffect, useMemo, useState } from "react";

const LifeCycleHooks = () => {

    console.log("LifeCycleHooks Render")

    const [claps, setClaps] = useState<number>(0);
    const [like, setLike] = useState<boolean>(false);

    //ngOnit
    useEffect(() => {
        console.log("ngOnit 1")
        const timerId = setInterval(() => console.log("timer running"), 1000);
        //ngOnDestroy
        return () => {
            console.log("ngOnDestroy triggered");
            clearInterval(timerId);
        }
    }, [])

    const mouseMoveCallback = useCallback(() => {
        console.log("mouse move");
    }, [])

    //ngOnit
    useEffect(() => {
        console.log("ngOnit 2")
        window.addEventListener("mousemove", mouseMoveCallback)
        return () => {
            window.removeEventListener("mousemove", mouseMoveCallback)
        }
    }, [mouseMoveCallback])

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

    const likeDiv = useMemo(() => {
        const likeMessage =  like ? "unlike" : "like"
        return <div>likes : {likeMessage}</div>
    }, [like])

    return <div>
        <div>claps : {claps}</div>
        {likeDiv}
        <button onClick={onClapClicked}>Clap</button>
        <button onClick={toggleLike}>Toggle Like</button>
    </div>
}

export default LifeCycleHooks;
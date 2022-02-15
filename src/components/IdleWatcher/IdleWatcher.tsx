import { useCallback, useEffect, useRef, useState } from "react";

const IdleWatcher = () => {

    const [userState, setUserState] = useState<string>("active");

    const timerId = useRef<any>();

    const setIdle = useCallback(() => {
        setUserState("idle");
    }, [])

    const activatePlayer = useCallback(() => {
        console.log("Player Activated on Mouse move")
        setUserState("active");
        console.log("Rewatching....")
        clearTimeout(timerId.current);
        timerId.current = setTimeout(setIdle, 10000);
    }, [])

    useEffect(() => {
        if (userState === "active")
            window.addEventListener("mousemove", activatePlayer);
        else
            window.removeEventListener("mousemove", activatePlayer);

        return () => {
            if (userState === "active") {
                window.removeEventListener("mousemove", activatePlayer);
            }
        }
    }, [userState]);

    return <><div>{userState}
        {userState === "idle" ? <button onClick={activatePlayer}>ReActivate</button> : null}
    </div></>
}

export default IdleWatcher;
import { useCallback, useEffect, useRef, useState } from "react";

const IdleWatcher2 = () => {

    const [userState, setUserState] = useState<string>("active");

    const timerId = useRef<any>();

    const setIdle = useCallback(() => {
        console.log("Deactivating the user after 5 seconds")
        setUserState("idle");
    }, [])

    const activatePlayer = useCallback(() => {
        console.log("Activating the player on every mouse move");
        clearTimeout(timerId.current);
        setUserState("active");
        timerId.current = setTimeout(setIdle, 5000)
    }, [])

    useEffect(() => {
        if (userState === "active")
            window.addEventListener("mousemove", activatePlayer);
        else {
            if (userState === "idle") {
                window.removeEventListener("mousemove", activatePlayer);
            }
        }

        return () => {
            window.removeEventListener("mousemove", activatePlayer);
        }

    }, [userState]);

    return <>
        {userState === "idle" ? <button onClick={activatePlayer}>ReActivate</button> : null}
    </>
}

export default IdleWatcher2;
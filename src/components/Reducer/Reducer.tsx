import { useCallback, useReducer } from "react";
import _ from "lodash";

export enum Actions {
    VOLUME_INCREASE,
    VOLUME_DECREASE,
    NEXT_CHANNEL,
    PREV_CHANNEL
}

export interface ITvState {
    volume: number;
    channelIndex: number;
    channels: string[];
}

const initialState: ITvState = {
    volume: 50,
    channelIndex: 2,
    channels: ["BBC", "NDTV", "SUNNEWS", "STARMOVIES"]
}


function reducer(state: ITvState, action: any): ITvState {
    switch (action.type) {
        case Actions.VOLUME_INCREASE:
            return { ...state, volume: _.clamp(state.volume + 10, 0, 100) }
        case Actions.VOLUME_DECREASE:
            return { ...state, volume: _.clamp(state.volume - 10, 0, 100) }
        case Actions.PREV_CHANNEL:
            return { ...state, channelIndex:(state.channelIndex-1)%state.channels.length}
        case Actions.NEXT_CHANNEL:
            return { ...state, channelIndex: (state.channelIndex+1)%state.channels.length}
    }
    return state;
}

const Tv = () => {

    const [state, dispatch] = useReducer(reducer, initialState);

    const volumeUp = useCallback(() => {
        dispatch({ type: Actions.VOLUME_INCREASE });
    }, [])

    const volumeDown = useCallback(() => {
        dispatch({ type: Actions.VOLUME_DECREASE });
    }, [])

    const nextChannel = useCallback(() => {
        dispatch({ type: Actions.NEXT_CHANNEL });
    }, [])

    const prevChannel = useCallback(() => {
        dispatch({ type: Actions.PREV_CHANNEL });
    }, [])

    return (
        <div style={{ width: "700px", height: "500px", display: "grid", gridTemplateRows: "80% 10% 10%" }}>
            <div style={{ width: "100%", height: "100%", border: "10px solid black", borderRadius: "10px", backgroundColor: "aqua" }}>
                {state.channels[state.channelIndex]}
            </div>
            <div style={{ width: "150px", border: "1px solid black", boxSizing: "border-box" }}>
                <div style={{ backgroundColor: "red", width: `${150 * state.volume / 100}px`, height: "25px" }}>

                </div>
            </div>
            <div>
                <button onClick={volumeUp}>VOLUME UP</button>
                <button onClick={volumeDown}>VOLUME DOWN</button>
                <button onClick={nextChannel}>NEXT CHANNEL</button>
                <button onClick={prevChannel}>PREV CHANNEL</button>
            </div>

        </div>
    )

}

export default Tv;
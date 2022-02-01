import React, { FormEventHandler, useCallback, useRef, useState } from "react"
import './Form.css';

const Form = () => {

    console.log("render");

    const usernameRef = useRef<any>();
    const passwordRef = useRef<any>();

    const constructFormData = useCallback(() => {
        return {
            name: usernameRef.current.value,
            password: passwordRef.current.value
        }
    }, []);

    const onUserSubmit = useCallback((event: any) => {
        event.preventDefault();
        console.log(constructFormData())
    }, [constructFormData])

    return (
        <>
            <form className="FormWrapper" onSubmit={onUserSubmit}>
                <input ref={usernameRef} placeholder="Enter Name"></input>
                <input ref={passwordRef} placeholder="Enter Password" type="passwrod"></input>
                <button type="submit">Submit</button>
            </form>

        </>
    )
}

export default Form;



import { Button } from "@mui/material";
import React, { FormEventHandler, useCallback, useRef, useState } from "react"
import { emailValidator } from "../../utilities/validators/emailValidator";
import { lengthValidator } from "../../utilities/validators/lengthValidator";
import { requiredValidator } from "../../utilities/validators/requiredValidator";
import InputField from "../InputField/InputField";
import './ControlledForm.css';

const ControlledForm = () => {

    const formDataRef = useRef<any>({ userLogged: false });


    const onUserSubmit = useCallback((event: any) => {
        event.preventDefault();
        // send to server ormDataRef.current
    }, [])

    const onValueChange = useCallback((input) => {
        formDataRef.current = { ...formDataRef.current, ...input };

    }, [])

    return (
        <>
            <form className="ControlledFormWrapper" onSubmit={onUserSubmit}>

                <InputField validators={[requiredValidator,emailValidator]} onValueChange={onValueChange} name="username" label="Username" placeholder="Enter Username"></InputField>
                <InputField validators={[lengthValidator(6)]} onValueChange={onValueChange} name="password" label="Password" placeholder="Enter Password"></InputField>

                <Button type="submit" variant="contained">Submit</Button>
            </form>

        </>
    )
}

export default ControlledForm;



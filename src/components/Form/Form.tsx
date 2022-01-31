import React, { FormEventHandler, useCallback, useRef, useState } from "react"
import './Form.css';

const Form = () => {

    console.log("render");

    const nameRef = useRef<any>();
    const passwordRef = useRef<any>();

    const [age, setAge] = useState<number>(16);


    const onUserSubmit = useCallback((event: any) => {
        event.preventDefault();
        console.log("form button clicked or form submitted")

        console.log(nameRef.current.value)
        console.log(passwordRef.current.value)

        //Send User Input to Server
    }, [])

    const incrementAge = useCallback(() => {
        //setAge(age + 1);
        setAge((prevAge)=>prevAge+1);
    }, [])

    return (
        <>
            <form className="FormWrapper" onSubmit={onUserSubmit}>
                <input ref={nameRef} placeholder="Enter Name"></input>
                <input ref={passwordRef} placeholder="Enter Password" type="passwrod"></input>
                <button type="submit">Submit</button>
                Age : {age}
                <button onClick={incrementAge}>Increment Age</button>
            </form>

        </>
    )
}

export default Form;

//Create components Folder
//Create Commponent inside components
//Create a arrow function with same name as File
//Export 


function counter(){
    let a =1;
    a =a+1;
    console.log(a);
}

counter();
counter();


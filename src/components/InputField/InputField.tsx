import { TextField } from "@mui/material"
import { useCallback, useState } from "react";

export interface InputFieldProps {
    name: string;
    label: string;
    placeholder: string;
    onValueChange: any;
    validators?: any[];
}

const InputField = (props: InputFieldProps) => {
    const { name, label, placeholder, onValueChange, validators } = props;

    const [value, setValue] = useState<string>("");

    const [errorMessage, setErrorMessage] = useState<string>("");
    const [errorState, setErrorState] = useState<boolean>(false);

    const onValueChanged = useCallback((event) => {

        const { value } = event.target;

        setErrorMessage("");
        setErrorState(false);

        if (validators) {
            validators.some((validator) => {
                const validationResult = validator(value);
                if (validationResult !== undefined) {
                    setErrorMessage(validationResult);
                    setErrorState(true);
                    return true;
                }
            })
        };

        setValue(event.target.value);
        const obj = { [name]: event.target.value };
        onValueChange(obj)
    }, [])

    return <TextField error={errorState}  helperText={errorMessage} value={value} onChange={onValueChanged} placeholder={placeholder}></TextField>
}

export default InputField;
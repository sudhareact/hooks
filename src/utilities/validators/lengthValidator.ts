
export const lengthValidator = (minLength: number) => {
    return (value: string) => value.length >= minLength ? undefined : `Input length should be greater than ${minLength}`
}


/* export const checkForLengthGivenChars = (value: any, minLength: number) => {
    return value.length >= minLength ? undefined : "Password length should be greater than 10"
} */



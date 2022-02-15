import { useCallback, useMemo, useState } from "react";

const MemoExample = () => {
    const [firstName, setFirstName] = useState<string>("John");
    const [lastName, setLastName] = useState<string>("Wilson");

    const onFirstNameChange = useCallback((e) => {
        setFirstName(e.target.value)
    }, [])

    const onLastNameChange = useCallback((e) => {
        setLastName(e.target.value)
    }, [])
   
    //To Derive Another Meaningful Data from existing Data
    const fullName = useMemo(()=>{
      return `Mr.${firstName} ${lastName}`
    },[firstName,lastName])

    return <>
        <form>
            <input placeholder="Enter First Name"  defaultValue={firstName} onChange={onFirstNameChange}></input>
            <input placeholder="Enter Last Name" defaultValue={lastName}  onChange={onLastNameChange}></input>
        </form>
        {fullName}
    </>
}

export default MemoExample
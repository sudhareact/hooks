import { Button } from "@mui/material";
import { useCallback, useMemo, useRef, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { emailValidator } from "../../utilities/validators/emailValidator";
import { lengthValidator } from "../../utilities/validators/lengthValidator";
import { requiredValidator } from "../../utilities/validators/requiredValidator";
import InputField from "../InputField/InputField";
import './Memo.css';

export interface IStudent {
    id?: string;
    name: string;
    standard: number;
}

const StudentsMemo = () => {

    const [students, setStudents] = useState<IStudent[]>([])

    const addStudent = useCallback((event) => {
        const uniqueID = uuidv4();
        event?.preventDefault()
        const newStudent = { ...studentDataRef.current, id: uniqueID };
        setStudents([...students, newStudent])
    }, [students])

    const studentDataRef = useRef<any>({});
    const onValueChange = useCallback((input) => {
        studentDataRef.current = { ...studentDataRef.current, ...input };
    }, []);

    const studentsListUI = useMemo(() => {
        const studentRows = students.map((student) => {
            return <div className="Row" key={student.id}>
                <div className="Name">
                    {student.name}

                </div>
                <div className="Standard">
                    {student.standard}

                </div>
            </div>
        })
        return studentRows;
    }, [students])


    const formUI = useMemo(() => {
        return <form className="ControlledFormWrapper" onSubmit={addStudent}>
            <InputField validators={[requiredValidator]} onValueChange={onValueChange} name="name" label="Student Name" placeholder="Enter Student Name"></InputField>
            <InputField validators={[requiredValidator]} onValueChange={onValueChange} name="standard" label="Standard" placeholder="Enter Standard"></InputField>
            <Button type="submit" variant="contained">Submit</Button>
        </form>
    }, [addStudent, onValueChange])

    return <>
        {formUI}
        <div className="AllStudents">
            {studentsListUI}
        </div>
    </>
}

export default StudentsMemo;
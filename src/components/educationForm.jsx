import { useState } from "react";

export default function EducationForm( {education, setEducation}) {
    
    const [edit, setEdit] = useState(false);
    const [index, setIndex] = useState(0);

    const removeEducation = (id) => {
        setEducation(education.filter((edu) => edu.id !== id));
    }

    const editEducation = (id) => {
        setEdit(true);
        setIndex(education.findIndex((edu) => edu.id == id));
        const myObject = education.find((edu) => edu.id == id);
        document.querySelector("#school-name").value = myObject.schoolName;
        document.querySelector("#startDate").value = myObject.startDate;
        document.querySelector("#endDate").value = myObject.endDate;
        document.querySelector("#program").value = myObject.program;
        console.log(myObject);
    }

    return (
        <>
            <form id="educationInfo" onSubmit={(event) => {
                const form = document.querySelector("#educationInfo");
                event.preventDefault();
                const data = new FormData(event.target);
                const newEducation = {
                    schoolName: data.get("school-name"),
                    startDate: data.get("startDate"),
                    endDate: data.get("endDate"),
                    program: data.get("program"),
                    id: edit ? education[index].id : Date.now(),
                }
                if (!edit) {
                    setEducation([...education, newEducation]);
                } else {
                    const updatedEducation = education.map((edu, i) => 
                        i === index ? newEducation : edu
                    );
                    setEducation(updatedEducation);                    
                    console.log(education);
                }
                setEdit(false);
                form.reset();
            }}>
                <div id="education-form">
                    <div className="input">
                        <label htmlFor="school-name">School Name</label>
                        <input type="text" id="school-name" name="school-name"/>
                    </div>
                    <div id="dateBox">
                        <div className="input">
                            <label htmlFor="startDate">Start Date</label>
                            <input type="text" id="startDate" name="startDate"/>
                        </div>
                        <div className="input">
                            <label htmlFor="endDate">End Date</label>
                            <input type="text" id="endDate" name="endDate"/>
                        </div>
                    </div>
                    <div className="input">
                        <label htmlFor="program">Field of Study</label>
                        <input type="text" id="program" name="program"/>
                    </div>
                    <button type="submit">Submit</button>
                </div>
            </form>
            <div id="editButtons">
            {education.map((edu) => (
                    <div key={edu.id} className="education-edit-card" id={edu.id}>
                        <h1>{edu.schoolName}</h1>
                        <button onClick={() => editEducation(edu.id)}>Edit</button>
                        <button onClick={() => removeEducation(edu.id)}>Remove</button>
                    </div>
                ))}
            </div>
        </>
    )
}
import { useState } from "react";

export default function EducationForm( {education, setEducation}) {
    
    const [edit, setEdit] = useState(false);
    const [index, setIndex] = useState(0);

    const editEducation = (id) => {
        setEdit(true);
        setIndex(education.findIndex((edu) => edu.id == id));
        const myObject = education.find((edu) => edu.id == id);
        document.querySelector("#school-name").value = myObject.schoolName;
        document.querySelector("#date").value = myObject.date;
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
                    date: data.get("date"),
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
                    <div className="input">
                        <label htmlFor="date">Date of Study</label>
                        <input type="text" id="date" name="date"/>
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
                    <div key={edu.id} className="education-edit-card" id={edu.id} onClick={() => editEducation(edu.id)}>
                        <h1>{edu.schoolName}</h1>
                    </div>
                ))}
            </div>
        </>
    )
}
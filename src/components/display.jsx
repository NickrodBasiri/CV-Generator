import { useEffect } from 'react'
import '../styles/display.css'

export default function Display({name, email, phone, education}) {
    console.log(education);
    // useEffect(() => {
    //     for (let i = 0; i < education.length; i++) {
    //         const educationCard = document.createElement("div");
    //         const schoolName = document.createElement("h1");
    //         schoolName.innerText = education[i].schoolName;
    //         educationCard.appendChild(schoolName);

    //         const educationDiv = document.querySelector("#education-info");
    //         educationDiv.appendChild(educationCard);
    //     }
    // });

    return (
        <>
        <div id="CV">
            <div id="header">
                <h1>{name}</h1>
                <div id="contact-info">
                    <h1>{email}</h1>
                    <h1>{phone}</h1>
                </div>
            </div>
            <div id="education-info">
                {education.map((edu, index) => (
                    <div key={index} className="education-card">
                        <h1>{edu.schoolName}</h1>
                    </div>
                ))}
            </div>
        </div>
        </>
    )
}
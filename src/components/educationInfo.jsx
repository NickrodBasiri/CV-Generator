export default function EducationInfo( {education, setEducation} ) {
    return (
        <>
        <form onSubmit={(event) => {
            event.preventDefault();
            const data = new FormData(event.target);
            const newEducation = {
                schoolName: data.get("school-name"),
            }
            setEducation([...education, newEducation]);
        }}>
            <div id="education-info">
                <div id="input">
                    <label htmlFor="school-name">School Name</label>
                    <input type="text" id="school-name" name="school-name"/>
                </div>
            </div>
            <button type="submit">Submit</button>
        </form>
        </>
    )
}
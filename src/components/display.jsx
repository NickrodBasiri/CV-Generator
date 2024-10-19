import '../styles/display.css'

export default function Display({name, email, phone}) {
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
        </div>
        </>
    )
}
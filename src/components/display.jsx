import '../styles/display.css'

export default function Display({name, email, phone}) {
    return (
        <>
        <div id="CV">
            <h1>{name} {email} {phone}</h1>
        </div>
        </>
    )
}
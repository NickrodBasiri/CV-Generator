export default function PersonalForm({name, setName, email, setEmail, phone, setPhone, linkedIn, setLinkedIn, github, setGithub}) {
    return (
        <form id="personal-info">
            <div className="input">
                <label htmlFor="name">Full Name</label>
                <input type="text" value={name} onChange={(event) => setName(event.target.value)}/>
            </div>
            <div className="input">
                <label htmlFor="email">Email</label>
                <input type="text" value={email} onChange={(event) => setEmail(event.target.value)}/>
            </div>
            <div className="input">
                <label htmlFor="phone">Phone Number</label>
                <input type="text" value={phone} onChange={(event) => setPhone(event.target.value)}/>
            </div>
            <div className="input">
                <label htmlFor="LinkedIn">LinkedIn</label>
                <input type="text" value={linkedIn} onChange={(event) => setLinkedIn(event.target.value)}/>
            </div>
            <div className="input">
                <label htmlFor="github">Github</label>
                <input type="text" value={github} onChange={(event) => setGithub(event.target.value)}/>
            </div>
        </form>
    )
}
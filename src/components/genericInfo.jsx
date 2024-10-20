import '../styles/genericInfo.css';

export default function GenericInfo({ name, setName, email, setEmail, phone, setPhone, personalDisplay, setPersonalDisplay }) {
    const handleDisplay = () => {
        setPersonalDisplay(!personalDisplay);
    }
    return (
        <>
        <button onClick={handleDisplay}>Display</button>
        { personalDisplay && (    
            <form>
                <div id="personal-info">
                    <div className="input">
                        <label htmlFor="name">Full Name</label>
                        <input type="text" value={name} onChange={(event) => setName(event.target.value)}/>
                    </div>
                    <div className="input">
                        <label htmlFor="email">Email</label>
                        <input type="text" value={email} onChange={(event) => setEmail(event.target.value)}/>
                    </div>
                    <div className="input">
                        <label htmlFor="name">Phone Number</label>
                        <input type="text" value={phone} onChange={(event) => setPhone(event.target.value)}/>
                    </div>
                </div>
            </form>)}
        </>
    );
}
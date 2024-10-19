export default function Information({ name, setName, email, setEmail, phone, setPhone }) {
    return (
        <>
        <form>
            <label htmlFor="name">Full Name</label>
            <input type="text" value={name} onChange={(event) => setName(event.target.value)}/>

            <label htmlFor="email">Email</label>
            <input type="text" value={email} onChange={(event) => setEmail(event.target.value)}/>

            <label htmlFor="name">Phone Number</label>
            <input type="text" value={phone} onChange={(event) => setPhone(event.target.value)}/>
        </form>
        <h1>{name}</h1>
        <h1>{email}</h1>
        <h1>{phone}</h1>
        </>
    );
}

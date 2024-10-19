import { useState } from "react";
import Information from "./components/information";

function App() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    return (
        <>
        <Information 
        name={name} 
        setName={setName}
        
        email={email}
        setEmail={setEmail}

        phone={phone}
        setPhone={setPhone}
        />
        </>
    );
}

export default App;

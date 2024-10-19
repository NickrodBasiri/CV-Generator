import { useState } from "react";
import GenericInfo from "./components/genericInfo";
import Display from "./components/display";
import './styles/app.css'

function App() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    return (
        <>
        <div id="body">
            <GenericInfo
            name={name}
            setName={setName}
            
            email={email}
            setEmail={setEmail}
            phone={phone}
            setPhone={setPhone}
            />
            <Display
            name={name}
            email={email}
            phone={phone}
            />
        </div>
        </>
    );
}

export default App;

import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import data from "./Api";
import { useState } from "react";

export default function App() {
    const [toggleBtn, setToggleBtn] = useState(false);

    const toggle = () => {
        setToggleBtn(state => !state)
    }

    return (
        <div className="container">
            <Header toggled={toggleBtn} toggle={toggle} />
            <Main toggled={toggleBtn} data={data} />
        </div>
    );
}

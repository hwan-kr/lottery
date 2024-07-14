import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { ButtonGroup, ToggleButton, Button } from "react-bootstrap";
import "./assets/styles/App.css";

function App() {
    let [selected, setSelected] = useState("");

    return (
        <>
            <div className="select-box">
                <button className={`select-btn ${selected ? "selected" : ""}`}>
                    로또 6/45
                </button>
                <button className="select-btn">연금 복권</button>
            </div>
            <div>
                <div className="lottery"></div>
                <div className="pension-lottery"></div>
            </div>
        </>
    );
}

export default App;

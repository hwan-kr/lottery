import React, { useEffect } from "react";
import { useState } from "react";
import "./styles/App.css";
import Lottery from "./components/Lottery";
import Pension from "./components/Pension";
import axios from "axios";

function App() {
    let [selected, setSelected] = useState("lottery");

    return (
        <>
            <div className="select-box">
                <div className="lottery">
                    <button
                        onClick={() => {
                            setSelected("lottery");
                        }}
                        className={`select-btn ${
                            selected === "lottery" ? "selected" : ""
                        }`}
                    >
                        로또 6/45
                    </button>
                    <div className={`${selected !== "lottery" ? "hide" : ""}`}>
                        <Lottery></Lottery>
                    </div>
                </div>
                <div className="pension-lottery">
                    <button
                        onClick={() => {
                            setSelected("pension");
                        }}
                        className={`select-btn ${
                            selected === "pension" ? "selected" : ""
                        }`}
                    >
                        연금 복권
                    </button>
                    <div className={`${selected !== "pension" ? "hide" : ""}`}>
                        <Pension></Pension>
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;

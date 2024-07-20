import React, { useEffect } from "react";
import { useState } from "react";
import "./styles/App.css";
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
                </div>
            </div>
        </>
    );
}

export default App;

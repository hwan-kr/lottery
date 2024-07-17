import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { ButtonGroup, ToggleButton, Button } from "react-bootstrap";
import "./assets/styles/App.css";

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
{
    /* <div className="lottery-items ">
    <div>번호 리스트</div>
    <div>
        <button>랜덤 번호 추출</button>
        <button>번호 저장</button>
    </div>
</div>; */
}

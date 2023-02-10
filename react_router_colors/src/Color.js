import React from "react";
import { Link } from "react-router-dom";
import "./Color.css";

function Color({ hex, color, history }) {
    if (!hex) {
        history.push("/colors");
    }

    return (
        <div className="Color" style={{ backgroundColor: hex }}>
            <p>This is {color}.</p>
            <p>This is a very interesting color.</p>
            <p>
                <Link to="/">Return back to colors</Link>
            </p>
        </div>
    );
}

export default Color;
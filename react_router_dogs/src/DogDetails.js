import React from "react";
import { Link, Redirect } from "react-router-dom";
import "./DogDetails.css";

function DogDetails ( {dog} ) {
    if(!dog) return <Redirect to="/dogs"/>

    return (
        <div className="row DogDetails">
            <div className="col d-flex flex-column align-items-center">
                <img src={dog.src} alt={dog.name} />
                <h2>{dog.name}</h2>
                <h2>{dog.age} Years Old</h2>
                    <ol>
                        {dog.facts?.map((fact, i) => (
                            <li key={i}>{fact}</li>
                        ))}
                    </ol>
                <Link to="/dogs">Return to all dogs</Link>
            </div>
        </div>
    );
}

export default DogDetails
import React from "react";
import { Link } from "react-router-dom";
import "./DogList.css";

function DogList( {dogs} ){
    return (
        <div className="DogList">
            <div className="row mt-4">
                <div className="col">
                    <h1>Hi. Please take a look at our dogs. Select one to recieve more information.</h1>
                </div>
            </div>
            <div className="row">
                {dogs?.map(d => (
                    <div className="col-3 text-center" key={d.name}>
                        <img src={d.src} alt={d.name} />
                        <h2 className="mt-3">
                            <Link to={`/dogs/${d.name.toLowerCase()}`}>{d.name}</Link>
                        </h2>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default DogList;
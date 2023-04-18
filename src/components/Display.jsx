import React, { useState, useEffect } from "react";

function Display(props) {
    const lb = parseInt(props.lb);
    const ub = parseInt(props.ub);
    const refreshTime = parseInt(props.refreshTime);
    const initialNumber = Math.floor(Math.random() * (ub - lb + 1)) + lb;

    const [number, setNumber] = useState(initialNumber);

    useEffect(() => {
        const timer = setInterval(() => {
            setNumber(Math.floor(Math.random() * (ub - lb + 1)) + lb);
        }, refreshTime * 1000);

        return () => {
            clearInterval(timer);
        };
    });

    return (
        <div className="container">
            <h1>{number}</h1>
            <h5>[{lb} - {ub}] refreshTime = {refreshTime}</h5>
        </div>
    );
}

export default Display;

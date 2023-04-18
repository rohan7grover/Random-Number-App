import React from "react";
import Display from './Display'

function App() {
    return (
        <div>
            <h1> Random Numbers Generator </h1>
            <Display lb="10" ub="20" refreshTime="10" className="conatiner" />
            <Display lb="-10" ub="10" refreshTime="20" className="conatiner" />
            <Display lb="-100" ub="0" refreshTime="8" className="conatiner" />
            <Display lb="0" ub="20" refreshTime="12" className="conatiner" />
            <Display lb="-40" ub="40" refreshTime="16" className="conatiner" />
            <Display lb="100" ub="200" refreshTime="14" className="conatiner" />
        </div>
    );
}

export default App;
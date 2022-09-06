import React from 'react';

export default function Logotype({svg}) {
    return (
        <React.Fragment>
            <img src={svg} className="App-logo" alt="logo" />
            <h1 className="App-logo">BANKS</h1>
        </React.Fragment>
    );
}
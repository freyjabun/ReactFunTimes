import React from 'react';
import logo from '../logo.svg';
import '../App.css';
import Alex from "../components/Alex";

function RedButton() {
    return (
        <div className="App">
            <Alex></Alex>
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    );
}

export default RedButton;
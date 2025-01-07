import React from "react";
import logo from './assets/martincountydining.png';
import CardList from "./components/CardList";

const App = () => {
    return (
        <div className="App">
            <header className="header">
                <img src={logo} alt="Martin County Dining Logo" className="header-logo" />
                <div className="header-banner">
                    <h1>Martin County Dining Hot Spots</h1>
                    <p>Martin County local tested and approved</p>
                </div>
            </header>
            <CardList />
        </div>
    );
};

export default App;

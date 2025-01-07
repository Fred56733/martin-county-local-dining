import React from "react";
import CardList from "./components/CardList";

const App = () => {
    return (
        <div className="App">
            <header className="header">
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

import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from './component/layout/Navbar';
class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <Navbar>sina</Navbar>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;

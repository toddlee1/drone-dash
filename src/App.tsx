import React from 'react';
import './App.css';
import CustomLayout from "./layout";
import {BrowserRouter} from "react-router-dom";

function App() {

    return (
        <BrowserRouter>
            <CustomLayout />
        </BrowserRouter>
    );
}

export default App;

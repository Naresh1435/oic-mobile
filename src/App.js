import React from "react";
import ReactDOM from 'react-dom';
import { createBrowserRouter } from "react-router-dom";
import Home from "./home";
let App = createBrowserRouter([
    { 
        path : '/',
        element : <Home/>
    },
]);

export default App;
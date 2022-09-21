import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Repositories from "./Pages/Repositories";
import Home from "./Pages/Home"

export default function RoutesApp() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/'  element ={Home} />
                <Route path='/src/Pages/Repositories' element= {Repositories} />
            </Routes>
        </BrowserRouter>
    );
}

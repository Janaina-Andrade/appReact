import React from "react";
import { BrowserRouter, Routes,Route } from "react-router-dom";
import Home from "./Pages/Home";
import Repositories from "./Pages/Repositories";

    function App() {
          return (
              <BrowserRouter>
              <Routes>
                <Route path = '/' element={<Home />} />
                <Route path = '/Repositories' element = {<Repositories />}/>
            </Routes>
        </BrowserRouter>
);
    } 
   

    
       
export default App;
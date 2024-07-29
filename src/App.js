import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";

import { Dom } from "./Component/Dom";
import { Virtualdom } from "./Component/Virtualdom";
import { Compo } from "./Component/Compo";   
import { Lifecycle } from "./Component/Lifecycle";
import { History } from "./Component/History";
import { Navbar } from "./Component/Navbar";
import { Navside } from "./Component/Navside";
import { Props } from "./Component/Props";
import { Jsoutput } from "./Component/Jsoutput";
import { Jsvariable } from "./Component/Jsvariable";
import {JsDatatype }from "./Component/JsDatatype";
import { Newtask } from "./Component/Newtask";
import WishingCard from "./Component/WishingCard";
    
function App(){
  return (
    <div className="App">
           <Router>
         
         <Navbar/>  
         <Navside/>
  
         <Routes>
          <Route path="/his" element= {<History/>}/>
          <Route path="/dom" element={<Dom />} />
          <Route path="/vdom" element={<Virtualdom />} />
          <Route path="/com" element={<Compo />} />
          <Route path="/life" element={<Lifecycle />} />
          <Route path="/props" element={<Props/>}/>
          <Route path="/jsoutput" element={<Jsoutput/>}/>
          <Route path="/Jsvar" element={<Jsvariable/>}/>
          <Route path="/JsDatatype" element={<JsDatatype/>}/>
          
        </Routes>
      </Router> 
        
    </div>
  );
}

export default App;

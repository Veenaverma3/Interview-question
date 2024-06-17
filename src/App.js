import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";

import { Dom } from "./Component/Dom";
import { Virtualdom } from "./Component/Virtualdom";
import { Compo } from "./Component/Compo";
import { Lifecycle } from "./Component/Lifecycle";
import { History } from "./Component/History";
import { Navbar } from "./Component/Navbar";
  
function App(){
  return (
    <div className="App">
      <Navbar/>
         <Router>
        <Routes>
          <Route path="/his" element= {<History/>}/>
          <Route path="/dom" element={<Dom />} />
          <Route path="/vdom" element={<Virtualdom />} />
          <Route path="/com" element={<Compo />} />
          <Route path="/life" element={<Lifecycle />} />
        </Routes>
      </Router> 
    </div>
  );
}

export default App;

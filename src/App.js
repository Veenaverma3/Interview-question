import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
  
  import { Navbar } from "./Component/Navbar";
import { Navside } from "./Component/Navside";
 
     
function App(){
  return (
    <div className="App bg-gradient-to-r from-pink-500 via-red-500 to-purple-500 min-h-screen">           <Router>
         
         <Navbar/>  
         <Navside/>
  
         <Routes>
         </Routes>
      </Router> 
        
    </div>
  );
}

export default App;

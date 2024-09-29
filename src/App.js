import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
  
  import { Navbar } from "./Component/Navbar";
 import QuestionsList from "./Component/Navside";
import Signup from "./Component/Signup";
import ResetPassword from "./Component/Login"; 
import Add from "./Component/Add";
  
     
function App(){
  return (
    <div className="App bg-gradient-to-r from-blue-200 to-cyan-200 min-h-screen">    
           <Router>
           <Navbar/> 
  {/* <QuestionsList/> */}
          <Routes>
          <Route path="/ques" element={<QuestionsList/>}/>
          <Route path="/sign" element={<Signup/>}/>
          <Route path="/log" element={<ResetPassword/>}/>
          <Route path="/add" element={<Add/>}/>
           </Routes>
      </Router> 
        
    </div>
  );
}

export default App;

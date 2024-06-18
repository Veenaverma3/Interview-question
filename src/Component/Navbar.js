import React from 'react'
import "./Navbar.css"
 import { Link } from 'react-router-dom'
export const Navbar = () => {
  return (
    <div>
         <div className="nav">
          <h1 className="tex"> 
            <Link to="/">React</Link> 
          </h1>
          <div className="navcs">
          <Link to="/his">History</Link>
          <Link to="/dom">Dom</Link>
          <Link to='/vdom'>Vdom</Link>
          <Link to='/com'>Component</Link>
          <Link to='/life'>Lifecycle</Link>

          </div>
        </div>
        </div>
   
  )
}

import React from 'react'
import "./Navbar.css"

export const Navbar = () => {
  return (
    <div>
         <div className="nav">
          <h1 className="tex"> <a href="$">Navebar</a></h1>
        
            <div className="navcs">
            <a href="/his">History </a>
            <a href="/dom">Dom</a>
            <a href="/vdom">Virtualdom</a>
            <a href="/com">Component</a>
            <a href="/life">Lifecycle</a>
          </div>
        </div>
    </div>
  )
}

import React from 'react'
import "./Theory.css"

export const Dom = () => {
  return (
    <div className='dom'>
        <h1 className='h1' align="center" color="red">DOM</h1>
        <p className='p'>Dom help to access that element which we want to change that element's <b>HTML</b> and <b>CSS</b>  </p>
        <h2 className='h2'>Updating the DOM:</h2>
        <p className='p'>We using the <b>getElementById()'</b>' or <b> 'getElementByClass()'</b> method to modify the contents of DOM.</p>
        <p className='p'>Whenever there is any change that occurs in the state of your application, the DOM is updated to reflect the change in the UI.</p><br></br>
      <h1 className='h1' align="center">V8 Engine</h1>
      <p className='p'>V8 is Google’s open source high-performance JavaScript and WebAssembly engine, written in C++. It is used in Chrome and in Node.js, among others. It implements ECMAScript and WebAssembly, and runs on Windows, macOS, and Linux systems that use x64, IA-32, or ARM processors. </p><br></br>
  <h1 className='h1'> Node js</h1>
  <p className='p'>Node.js is an open source server environment.<br/>
 Node.js allows you to run JavaScript on the server.</p>
 <p className='p'>Node.js is a cross-platform, open-source JavaScript runtime environment that can run on Windows, Linux, Unix, macOS, and more. Node.js runs on the V8 JavaScript engine, and executes JavaScript code outside a web browser.</p>
    </div>
  )
}

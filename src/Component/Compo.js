import React from 'react'
import "./Theory.css"

export const Compo = () => {
  return (
    <div className='com'>
        <h1 className='h1'>COMPONENTS</h1>
        <p className='p'>Components are independent and reusable of code. Every user interface in the React app is a component. A single application has many components.</p>
        <h1 className='h1'>Types of Components</h1>
        <ul className='ol'>
            <h2 className='h2'>
            <li>Class components </li>
            <li>Functional components</li>
       </h2> </ul>
       <ol type='1' className='ol2'>
        <li><b>Class Components = </b>Class components are stateful because they use their "state" to change the user interface. Functional components are stateless components. They act like a JavaScript function that takes an arbitrary parameter called "props".</li>
        <li><b>Functional Components = </b> Functional Component is one way to create components in a React Application. React.js Functional Components helps to create UI components in a Functional and more concise way.</li>
       </ol>
        
        
        </div>
  )
}

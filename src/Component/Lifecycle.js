import React from 'react'
import "./Theory.css"

export const Lifecycle = () => {
  return (
    <div className='cl'>
        <h1 className='h1' align="center">Component Lifecycle</h1>
        <p className='p' align="center">In React, components have a lifecycle that consists of different phases. Each phase has a set of lifecycle methods that are called at specific points in the component's lifecycle.</p>
         <h2 className='h2'>A component's lifecycle has three main phases:</h2>
         <ol type='1' className='ol' align="left">
            <li><b>Initialization phase = </b>This is the stage where the component is constructed with the given Props and default state. This is done in the constructor of a Component Class. </li><br/>
            <li><b>Mounting Phase = </b> Mounting is the stage of rendering the JSX returned by the render method itself.</li><br/>
            <li><b>Updating = </b>Updating is the stage when the state of a component is updated and the application is repainted.</li><br/>
            <li><b>Unmounting =
            </b> As the name suggests Unmounting is the final step of the component lifecycle where the component is removed from the page.</li><br/>
            
         </ol>
        </div>
  )
}

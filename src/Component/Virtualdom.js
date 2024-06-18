import React from 'react'
import "./Theory.css"

export const Virtualdom = () => {
  return (
    <div className='vd'>
        <h1 className='h1' align="center">Virtual Dom</h1>
        <p className='p'>Virtual Dom is just a copy of real dom,whenever there is a change in the state of any element, a new Virtual DOM tree is created. This new Virtual DOM tree is then compared with the previous Virtual DOM tree and make a note of the changes. After this, it finds the best possible ways to make these changes to the real DOM. Now only the updated elements will get rendered on the page again.</p>
       <h2 className='h2 '>Virtual DOM Key Concepts :</h2>
       <ul className='ul'>
        <li>Virtual DOM is the virtual representation of Real DOM</li>
        <li>Virtual DOM is just like a blueprint of a machine, can do changes in the blueprint but those changes will not directly apply to the machine.</li>
        <li>Virtual DOM is a programming concept where a virtual representation of a UI is kept in memory synced with “Real DOM ” by a library such as ReactDOM and this process is called reconciliation
        </li>
        <li>Virtual DOM makes the performance faster, not because the processing itself is done in less time. The reason is the amount of changed information – rather than wasting time on updating the entire page, you can dissect it into small elements and interactions</li>
       </ul>
        </div>
  )
}

import React from 'react'

export const Jsvariable = () => {
  return (
    <>
    <div className=' m-auto align-middle text-left ml-96  -mt-24 text-white '>
        <h1 className='  text-white text-5xl '> JavaScript Variables Declareation </h1><br/>
        <p className=' text-2xl text-yellow-300'>JavaScript Variables can be declared in 4 ways: </p><br/>

    <ul className=' list-disc '>
        <li>
            <h2 className=' text-3xl text-red-500'> Automatically </h2><br/>
            <p className=' text-2xl text-yellow-300'>In this first example, x, y, and z are undeclared variables.<br/>
            They are automatically declared when first used:</p> <br/>
            <div className=' bg-white h-[100px] text-black w-[200px] '> x = 5; <br/> y = 6;<br/> z= x + y; </div></li>

            <li>
  <h2 className='text-3xl text-red-500'>Using Var</h2><br/>
  <p className='text-2xl text-yellow-300'>The var keyword was used in all JavaScript code from 1995 to 2015.<br/>
The let and const keywords were added to JavaScript in 2015.<br/>
The var keyword should only be used in code written for older browsers.</p> <br/>
  <div className='bg-white h-[100px] text-black w-[200px]'>let x = 5;<br/>
let y = 6;<br/>
let z = x + y;</div>
</li>

<li>
  <h2 className='text-3xl text-red-500'> using Let</h2><br/>
  <p className='text-2xl text-yellow-300'>The let keyword was introduced in ES6 (2015)<br/>
Variables declared with let have Block Scope<br/>
Variables declared with let must be Declared before use<br/>
Variables declared with let cannot be Redeclared in the same scope</p> <br/>
  <div className='bg-white h-[100px] text-black w-[200px]'>
  {
 <p> let x = 2;</p>
}
  </div>
</li>

<li>
  <h2 className='text-3xl text-red-500'>Using Const</h2><br/>
  <p className='text-2xl text-yellow-300 Helvetica'>The const keyword was introduced in ES6 (2015)<br/>
Variables defined with const cannot be Redeclared<br/>
Variables defined with const cannot be Reassigned<br/>
Variables defined with const have Block Scope</p> <br/>
  <div className='bg-white h-[100px] text-black w-[200px]'>
    <p>const PI = 3.141592653589793;<br/>
PI = 3.14;  <br/>
PI = PI + 10;</p>
  </div>
</li>

     </ul>

    </div>
    </>
  )
}

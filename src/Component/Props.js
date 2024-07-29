import React from "react";
import img1 from "./Sc.png";
import { Code } from "./Code";
export const Props = () => {
  const ex1 = `import React,{useEffect} from 'react'
import 'tailwindcss/tailwind.css';
import Prism from 'prismjs';
import 'prismjs/themes/prism.css'
export const Code = (props) => {
    // const {code, language} = props;
    useEffect (() =>{
        Prism.highlightAll();
    },[]);
  return (
    <>
    
        <code className= {langua}>
            {props.code}
        </code>
    </>
  )
}`;
  return (
    <div className=" m-auto text-left  ml-80 mt-3 text-white">
      <h1 className=" text-5xl ">What is props</h1>
      <br />
      <p className=" text-red-500 text-2xl">
        With the help of props we can share data between two components.{" "}
      </p>
      <br />
      <ul className=" text-orange-300 text-4xl list-disc">
        <li>Undirectional</li>
        <br />
        <li>Immutable</li>
      </ul>
      <br />
      <div className=" ">
        {" "}
       </div>
       
    </div>
  );
};

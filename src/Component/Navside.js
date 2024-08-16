import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'; 
 import {  atelierForestDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
 const QuestionsList = () => {
    const [questions, setQuestions] = useState([]);
    const [visibleIndex, setVisibleIndex] = useState(null); // Track which question is visible

    useEffect(() => {
        const fetchQuestions = async () => {
            try {
                const response = await axios.get('http://localhost:4000/data');
                console.log("fetched data", response.data);
                setQuestions(response.data.Quest);
            } catch (err) {
                console.error("error", err);
            }
        };

        fetchQuestions();
    }, []);

    const toggleVisibility = (index) => { 
        setVisibleIndex(visibleIndex === index ? null : index);
    };

    return (
        <div className="p-6 bg-gradient-to-r  min-h-screen">
            <h1 className="text-4xl font-extrabold text-black text-center mb-6">Interview Questions</h1>
            <div className="space-y-7">
                {questions.length === 0 ? (
                    <p className="text-white text-lg text-center">Loading...</p>
                ) : (
                    questions.map((question, index) => (
                        <div
                            key={index}
                            className={`p-4 rounded-md shadow-lg cursor-pointer w-1/2 m-auto border-2 border-gray-800 shadow-gray-900 ${visibleIndex === index ? 'bg-red-200' : 'bg-fuchsia-300'}`}
                            onClick={() => toggleVisibility(index)}
                        >
                            <h2
                                className={`text-xl font-semibold ${visibleIndex === index ? 'text-black text-bold' : 'text-gray-800'}`}
                            >
                                Question: {question.Ques}
                            </h2>
                            {visibleIndex === index && (
                                <p className="text-lg mt-2 text-gray-700">
                                    Answer: {question.Ans}
                                </p>
)}                                  
                                        {/* example */}
                                   {visibleIndex === index && question.ex && (
                                <div className="mt-2">
                                    <p className="text-lg ">Example:</p>
                                    <SyntaxHighlighter language="javascript" style={atelierForestDark}>
                                        {question.ex}
                                    </SyntaxHighlighter>
                                </div>
                            )}
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default QuestionsList;

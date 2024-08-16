 // src/components/Questions.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Questions = () => {
    const [questions, setQuestions] = useState([]);

    useEffect(() => {
        const fetchQuestions = async () => {
            try {
                const response = await axios.post('http://localhost:4000/questions');
                setQuestions(response.data);
            } catch (error) {
                console.error('Error fetching questions:', error);
            }
        };

        fetchQuestions();
    }, []);

    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            <h1 className="text-3xl font-bold mb-6 text-gray-800">Questions</h1>
            <ul className="space-y-4">
                {questions.map(question => (
                    <li key={question.id} className="bg-white p-4 rounded shadow-md hover:bg-gray-50 transition ease-in-out duration-200">
                        <strong className="text-lg font-semibold text-gray-900">{question.Ques}</strong>
                        <p className="mt-2 text-gray-700">{question.Ans}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Questions;

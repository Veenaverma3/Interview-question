import React, { useState } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify'; // Import toast and ToastContainer
import 'react-toastify/dist/ReactToastify.css'; // Import toast CSS for styling
import { url } from './url';
 
const Add = () => {
  const [questionData, setQuestionData] = useState({
    Ques: '',
    Ans: '',
    ex: '' // New state for code example
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setQuestionData({
      ...questionData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${url}/add`, questionData);
        console.log("response added ",response)
        toast.success(response.data.message)
    } catch (err) {
          toast.error(err.response.data.message);
       }
    }


  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Add Question</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="Ques" className="block text-sm font-medium text-gray-700">Question</label>
            <input
              type="text"
              id="Ques"
              name="Ques"
              value={questionData.Ques}
              onChange={handleChange}
              required
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2"
              placeholder="Enter question"
            />
          </div>

          <div>
            <label htmlFor="Ans" className="block text-sm font-medium text-gray-700">Answer</label>
            <textarea
              id="Ans"
              name="Ans"
              value={questionData.Ans}
              onChange={handleChange}
              required
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2"
              placeholder="Enter answer"
              rows="4"
            />
          </div>

          <div>
            <label htmlFor="ex" className="block text-sm font-medium text-gray-700">Code Example</label>
            <textarea
              id="ex"
              name="ex"
              value={questionData.ex}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2"
              placeholder="Enter code example"
              rows="6"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Add Question
          </button>
        </form>

        {/* Initialize toast container */}
        <ToastContainer />
      </div>
    </div>
  );
};

export default Add;

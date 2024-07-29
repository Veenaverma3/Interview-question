import React, { useState } from 'react';
import Ques from './Allques';

export const Navside = () => {
  const [data, setData] = useState(Ques);
  const [selectedQues, setSelectedQues] = useState(null);

  const handleClick = (id) => {
    setSelectedQues(id === selectedQues ? null : id);
  };

  return (
    <>
      <div className="w-[20%] relative text-2xl text-white p-5 space-y-2">
        <h1>welcom to react app</h1>
        {data.map((item, index) => (
          <div key={index} className="w-full">
            <button 
              onClick={() => handleClick(item.id)} 
              className="w-[200px] text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            >
              <p className='text-center'>{item.id} Question</p>
            </button>
          </div>
        ))}
      </div>
      {selectedQues !== null && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-75 z-50">
          <div className="m-7 p-4 text-white   w-[500px] rounded-md bg-gradient-to-r from-slate-900 to-slate-700">
            {data.map((item, index) => (
              item.id === selectedQues && (
                <div key={item.id}>
                  <h1 className="text-2xl mb-7 text-orange-500">{item.id}. {item.Ques}</h1>
                  <p className="mb-0 text-justify">
                    <span className='text-2xl text-green-600'>Ans :</span> {item.Ans}
                  </p>
                  <button 
                    onClick={() => handleClick(null)} 
                    className="items-center m-auto mt-7 p-3 bg-red-500 rounded text-white w-28"
                  >
                    Close
                  </button>
                </div>
              )
            ))}
          </div>
        </div>
      )}
    </>
  );
};

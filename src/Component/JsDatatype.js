import React from 'react'
import { useState } from 'react';
export const JsDatatype = () => {

    const [formData, setFormData] = useState({
        name: '',
         email: '',
        message: ''
      });

      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value
        });
      };

  return (
     <div className=" bg-gray-100 m-auto align-middle text-center ml-96 h-[400px] w-[500px]  -mt-24 ">
      <div className="bg-white rounded-lg">
        <h2 className="text-2xl font-bold mb-6 text-center">Contact Form</h2>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
         
          <div>
            <label className="block text-sm font-medium text-gray-700">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            ></textarea>
          </div>
        </form>

        <div className="mt-6">
          <h3 className="text-lg font-medium text-gray-900">Preview:</h3>
          <p className="mt-1 text-gray-700"><strong>Name:</strong> {formData.name}</p>
          <p className="mt-1 text-gray-700"><strong>Email:</strong> {formData.email}</p>
          <p className="mt-1 text-gray-700"><strong>Message:</strong> {formData.message}</p>
        </div>
        </div>
        </div>
   )
}
export default JsDatatype ;

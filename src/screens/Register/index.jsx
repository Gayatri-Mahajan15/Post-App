import React from "react";

const Register = () =>  {
 return (
  <div className="flex items-center justify-center min-h-screen bg-gray-100">
     {/* Please fill the form. */}
      <form className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm space-y-6">
      <h2 className="text-2xl font-bold text-center text-slate-800"> Sign Up </h2>
       <div>
         <input
          type="email"
          placeholder="Email"
          required
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
        <div>
          <input
           type="number"
           placeholder="Phone Number"
           required
           className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
        <div>
          <input 
           type='password'
           placeholder='password'
           className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
       <div>
          <input 
           type='password'
           placeholder='Confirm password'
           className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>       
          <button
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition">
            Sign up
            </button>
       </form>
   </div>
  );
};

export default Register;
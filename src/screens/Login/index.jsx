// import { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import smInstance from '../../utils/smInstance';
import React from 'react';

const Login = () => {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     smInstance.get('/posts') 
//       .then((res) => setData(res.data))
//       .catch((err) => console.error(err));
//   }, []);

return (
 <div className="flex items-center justify-center min-h-screen bg-gray-100">
   {/* <Link to={"/home"}>Home</Link>
   <Link to={"/register"}>Register</Link> */}
       
  <form className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm space-y-6">
    <h2 className="text-2xl font-bold text-center text-slate-800">Login</h2>
     <div> 
      <label className="block mb-1 text-sm text-slate-600">Email</label>
          <input
           type='email'
           placeholder='you@gmail.com'
           className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            /> 
         </div>
            <div>
             <label className="block mb-1 text-sm text-slate-600">Password</label>
                <input 
                type='password'
                placeholder='********'
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>  

            <button
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
            >
                Login
            </button>
            <p className="text-sm text-slate-600">
                  Don't have an account?
                  </p>
              <a href="/register" className="text-blue-600 text-sm hover:underline">
                   Sign Up
              </a>  
            
            {/* <Link to={"/register"}>Sign up</Link> */}
           </form>
          
        {/* <div>
        <h1>Posts</h1>
            <ul>
                {data.map((post) => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
        </div> */}
    </div> 
);
}

export default Login;
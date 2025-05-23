import { Link } from 'react-router-dom';
import { registerPath } from '../../utils/routePath';

const Login = () => {
 return (
 <div className="flex items-center justify-center min-h-screen bg-gray-100">
          
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
                        
            <Link to={registerPath} className="text-blue-600 text-sm hover:underline">Sign up</Link>
           </form>
    </div> 
);
}

export default Login;
import { Link } from 'react-router-dom';
import { registerPath } from '../../utils/routePath';
import { useForm } from 'react-hook-form';

const Login = () => {
 const { 
    register, 
    handleSubmit,
    formState: { errors }
} = useForm();

 const onSubmit = (data) => {
    console.log(data);
 };

 return (
 <div className="flex items-center justify-center min-h-screen bg-gray-100">
          
  <form 
  onSubmit={handleSubmit(onSubmit)}
  className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm space-y-6">
    <h2 className="text-2xl font-bold text-center text-slate-800">Login</h2>

     {/* **************** Email */}
     <div> 
      <label className="block mb-1 text-sm text-slate-600">Email</label>
          <input
           className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
           type="text"
           name="email"
           placeholder="you@gmail.com"
          
            {...register("email", {
            required: true,
            pattern: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/
            })}
          /> 
           
           {errors.email && errors.email.type === "required" && (
            <p className="errorMsg">Email is required.</p>
          )}
          {errors.email && errors.email.type === "pattern" && (
            <p className="errorMsg">Email is not valid.</p>
          )}
         </div>

        {/* **************** Password */} 
            <div>
             <label className="block mb-1 text-sm text-slate-600">Password</label>
                <input 
                {...register("password", {
                    required: true,
                    minLength: 6
                })}
                type="password"
                placeholder='********'
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

          {errors.password && errors.password.type === "required" && (
            <p className="errorMsg">Password is required.</p>
          )}

          {errors.password && errors.password.type === "minLength" && (
            <p className="errorMsg">
              Password should be at least 6 characters.
            </p>
          )}
         </div>  

        {/* **************** Login */}
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
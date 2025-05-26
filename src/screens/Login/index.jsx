import { Link } from 'react-router-dom';
import { registerPath } from '../../utils/routePath';
import { useForm } from 'react-hook-form';
import FormInputField from '../../components/FormInputField';

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
       <FormInputField 
        label={"Email"}
        placeholder={"you@gmail.com"}
        name={"email"}
        inputHandler={
          {...register('email', {
            required: 'Email is required',
            pattern: {
              value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
              message: 'Invalid email address',
            },
          })}  
        }
        errors={errors}
        type={"text"}
       />
   

     {/* **************** Password */} 
       <FormInputField 
        label={"Password"}
        placeholder={"********"}
        name={"password"}
        inputHandler={ 
          {...register("password", {
            required: 'Password is required',
            minLength: {
              value: 6,
              message: 'Password should be at least 6 characters',
            }
          })}
        }
        errors={errors}
        type={"password"}
       />

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
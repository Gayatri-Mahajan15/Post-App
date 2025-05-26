import { useForm } from "react-hook-form";

const Register = () =>  {
const {
  register,
  handleSubmit,
  watch,
  formState : { errors }
} = useForm();

const onSubmit = (data) => {
  console.log(data);
};

const password = watch("password");    // watch password for confirmation

 return (
  <div className="flex items-center justify-center min-h-screen bg-gray-100">
    <form 
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm space-y-6">
      <h2 className="text-2xl font-bold text-center text-slate-800"> Sign Up </h2>
    
    {/* **************** Username */}
      <div>
        <input 
        type="text"
        placeholder="Username"
        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        {...register('username', 
          { required: 'Username is required' })}
        />
        {errors.username && <p>{errors.username.message}</p>}
       </div>

    {/* **************** Email */}
       <div>
         <input
          type="email"
          placeholder="Email"
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"

          {...register('email', {
            required: 'Email is required',
            pattern: {
              value: /^\S+@\S+$/i,
              message: 'Invalid email address',
            },
          })}
        />
        {errors.email && <p>{errors.email.message}</p>}
      </div>

     {/* **************** Phone number */}
        <div>
          <input
           type="tel"
           placeholder="Phone Number"
           className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"

           {...register("phone", {
            required: 'Phone number is required',
            pattern: {
              value: /^[0-9]{10}$/,
              message: 'Phone number must be 10 digits',
            },
          })}
        />
        {errors.phone && <p>{errors.phone.message}</p>}
      </div>
      
      {/* **************** Password */}
        <div>
          <input 
           type="password"
           placeholder="Password"
           className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"

           {...register("password", {
            required: 'Password is required',
            minLength: {
              value: 6,
              message: 'Password should be at least 6 characters',
            }
          })}
        />
        {errors.password && (<p className="errorMsg">{errors.password.message}</p>
      )}  
      </div>

      {/* **************** Confirm Password */}
       <div>
          <input 
           type="password"
           placeholder="Confirm Password"
           className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
           
            {...register('confirmPassword', {
            required: 'Please confirm your password',
            validate: (value) =>
              value === password || 'Passwords do not match',
          })}
        />
        {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}
      </div>       

      {/* **************** Sign up */}
          <button
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition">
            Sign up
            </button>
       </form>
   </div>
  );
};

export default Register;
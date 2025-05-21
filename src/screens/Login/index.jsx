import React from 'react';
import './index.css';
import { Link } from 'react-router-dom';

const Login = () => {
    
 return (
  <div>
   <Link to={"/home"}>Home</Link>
   <Link to={"/register"}>Register</Link>
       
     <form>
    <div>
     <h2>Login</h2>
      <label>Email:</label><br/>
          <input
           type='email'
           placeholder='Enter Email'
            /> 
         <div>
             <label>Password:</label><br/>
                <input 
                type='password'
                placeholder='Enter password'
                />
            </div>           
            <button>Login</button>
            <p>Don't have an account?</p>
            <Link to={"/register"}>Sign up</Link>
            </div>
        </form>
        
    </div> 
);
}

export default Login;
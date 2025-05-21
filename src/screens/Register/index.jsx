import React from "react";
import './index.css';

const Register = () =>  {
    return (
        <div>
            Please fill the form.
            <div>
             <div>
             <h2> Sign Up </h2>
              </div>
              <form>
               <div>
                <input
                  type="email"
                  placeholder="Email"
                  required
                //   autoComplete="email"
                />
              </div>
            
             <div>
                <input
                  type="number"
                  placeholder="Phone Number"
                  required
                //   autoComplete="email"
                />
              </div>
             
              <div>
               <input 
                type='password'
                placeholder='password'
                />
            </div> 

            <div>
               <input 
                type='password'
                placeholder='Confirm password'
                />
            </div>

            <button>Sign up</button>

                 </form>
              </div>
            </div>
        
    );
};

export default Register;
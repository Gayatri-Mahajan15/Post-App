import { useEffect, useState } from 'react';
import './index.css';
import { Link } from 'react-router-dom';
import smInstance from '../../utils/smInstance';

const Login = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    smInstance.get('/posts') 
      .then((res) => setData(res.data))
      .catch((err) => console.error(err));
  }, []);

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
        
        <h1>Posts</h1>
            <ul>
                {data.map((post) => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
        
    </div> 
);
}

export default Login;
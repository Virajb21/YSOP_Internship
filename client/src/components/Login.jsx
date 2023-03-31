import React, {useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const login = async(e) => { 
        e.preventDefault();
        try {
          const res = await axios.post('http://localhost:8000/signin',{email,password});
          console.log(res);
          alert('User Logged in Successfully!!!')
          navigate('/home');
        } catch (err) {
            console.log("this is the error " + err);
        }
    }
  return (
    <div className='mt-44'>
        <h1 className='text-4xl text-center mb-4'>Login</h1>
        <form className='max-w-md mx-auto'>
            <input type='email' value={email} placeholder='email' onChange={ e => {setEmail(e.target.value)} }/>
            <input type='password' value={password} placeholder='password' onChange={ e => {setPassword(e.target.value)} }/>
            <button className='primary' onClick={login}>Login</button>
        </form>
    </div>
  )
}

export default Login
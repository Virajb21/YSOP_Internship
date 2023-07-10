import React, {useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    const [selectedOption, setSelectedOption] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [redirect,setRedirect] = useState(false);
    const handleOptionChange = (e) => {
      setSelectedOption(e.target.value);
    };
    const login = async(e) => { 
        let res;
        e.preventDefault();
        try {
          selectedOption==='user' ? res = await axios.post('http://localhost:8000/user/signin',{email,password}) : res = await axios.post('http://localhost:8000/admin/signin',{email,password});
          console.log(res);
          const token = localStorage.getItem(res.data.token);
          console.log(token);
          axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
          alert('User Logged in Successfully!!!')
          setRedirect(true);
        } catch (err) {
            console.log("this is the error " + err);
        }
    }
  if(redirect){
     return navigate('/home');
  }
  return (
    <div className='mt-44'>
        <h1 className='text-4xl text-center mb-4'>Login</h1>
        <label htmlFor="user-type" className="mr-2">Signup as:</label>
          <select
            id="user-type"
            value={selectedOption}
            onChange={handleOptionChange}
            className="p-2 border border-gray-300 rounded-md"
          >
            <option value="">Select Option</option>
            <option value="admin">Admin</option>
            <option value="user">User</option>
          </select>
        <form className='max-w-md mx-auto'>
            <input type='email' value={email} placeholder='email' onChange={ e => {setEmail(e.target.value)} }/>
            <input type='password' value={password} placeholder='password' onChange={ e => {setPassword(e.target.value)} }/>
            <button className='primary' onClick={login}>Login</button>
        </form>
    </div>
  )
}

export default Login
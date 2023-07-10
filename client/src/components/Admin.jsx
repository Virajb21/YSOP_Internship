import React, { useEffect, useState, createContext } from 'react';
import axios from 'axios';
import UserData from './UserData';

const API = 'http://localhost:8000/admin/getusers'

const Admin = () => {
  const [users,setUsers] = useState([]);
  const fetchUser = async(url) => {
        try {
            const res = await fetch(url);
            const data = JSON.parse(res);
            // console.log(data);
            // if(data.length()>0) setUsers(data);
            // console.log(data);
        } catch(e) {
             console.log(e.message);
        }
  }
  useEffect(() => {
        fetchUser(API);
  },[])
  return (
    <>
      <table>
        <thead>
            <tr>
                <th>ID</th>
                <th>Username</th>
                <th>Email</th>
                <th>Status</th>
            </tr>
        </thead>
        <tbody>
            <UserData userlist={users}/>
        </tbody>
      </table>
    </>
  )
}

export default Admin
import { useState,useEffect } from 'react'
import axios from 'axios'
import React from 'react'


const UserList = () => {
 const [userList,setUserlist]  = useState ([])
useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/users').then((res)=>{setUserlist(res.data)})
},[]);

  return (
    <div>

      {
        userList.map((userInf)=>(<div key={userInf.id}><h1 style={{fontSize:'25px'}}>{userInf.name}</h1>
        <h1 style={{fontSize:'23px'}}>{userInf.username}</h1>
        <h1 style={{fontSize:'20px'}}>{userInf.address.street}</h1>
        <h1 style={{fontSize:'18px'}}>{userInf.phone}</h1>
        <h1 style={{fontSize:'16px'}}>{userInf.website}</h1>
        <h1 style={{fontSize:'14px'}}>{userInf.company.bs}</h1>
        <hr />
        </div>))
      }

    </div>
  )
}

export default UserList
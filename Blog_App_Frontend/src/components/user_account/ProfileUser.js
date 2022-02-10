import React, { useEffect, useState } from 'react';
import { getProfile } from '../../config/MyService';
import { Link,Navigate } from "react-router-dom";
import './Profile.css'; 
import './ProfileUser.css';

const ProfileUser = () => {
    
let [user,setUser] = useState('');
let [fname, setFname] = useState('');
let [lname, setLname] = useState('');
let [uname, setUname] = useState('');
let [email, setEmail] = useState('');

useEffect(()=>{
    getProfile(localStorage.getItem("email"))
    .then(res => {
        if(res.data.email){
            console.log(res.data.email);
            let data = res.data.email;
            setUser(data);          
            setFname(data.fname);
            setLname(data.lname);
            setUname(data.uname);
            setEmail(data.email);
        }
    })
},[])


    return (

    <>  
    {localStorage.getItem("_token")? 
         <div>
         
         <div title={`${uname}'s Profile`} />
          <div className="profileContainer" >
            <div >
              <h1>My Profile</h1>
              <img src="https://static.vecteezy.com/system/resources/previews/002/318/271/non_2x/user-profile-icon-free-vector.jpg" height="300px" alt={uname}  />
  
            </div>
            <div>
              <div>
                <h4>First Name</h4>
                <p>{fname}</p>
              </div>
              <div>
                <h4>Last Name</h4>
                <p>{lname}</p>
              </div>
              <div>
                <h4>Email</h4>
                <p>{email}</p>
              </div>
            
            </div>
          </div>  
          </div>
          : <Navigate to ='/' />
         
          } 
 
    
    </>
    )
}

export default ProfileUser



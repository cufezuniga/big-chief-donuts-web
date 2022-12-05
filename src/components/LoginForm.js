import React, { useState, useContext } from 'react';
import { AppContext } from '../context/Context';
import { validateRequired } from '../utils/FormUtils';
import '../App.css';

const LoginForm = (props) => {
   const [userName, setUserName] = useState("");
   const [password, setPassword] = useState("");
   const [error, setError] = useState("");

   const { state, setState } = useContext(AppContext);


   const login = async () => {
      try {
         const response = await fetch('https://0c6a467a-00be-45d9-ab34-00b6213a7d9c.mock.pstmn.io/login', {
            method: 'POST',
            body:
               JSON.stringify({ "username": userName, "password": password })
            ,
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
            headers: {
               'Content-Type': 'application/json'
            },
            redirect: 'follow', // manual, *follow, error
            referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
         });


         if (response.ok) {
            const loginInfo = await response.json();
            setState(loginInfo);
         }
         else {
            setError("Login Failed! Status: " + response.status + ". Message: " + response.error);
         }

      }
      catch (Ex) {
         console.log("Exception caught." + Ex);
      }
   };

   const handleSubmit = (e) => {
      let isValid = validateRequired(userName) && validateRequired(password);
      if (isValid) {
         setError("");
         login();
      }
      else {
         setError("User name and password are required.");
      }

      e.preventDefault();
   }

   return (
      <div className='form border-black' style={{ backgroundColor: ' honeydew', width: '15%' }} >
         < form onSubmit={e => handleSubmit(e)} >
            <label htmlFor='name' className='row'>user name: </label>
            <input type="text" id="username" onChange={e => setUserName(e.target.value)} style={{ margin: 2 }} />
            <label htmlFor="pwd" className='row'>password: </label>
            <input type="password" id="password" onChange={e => setPassword(e.target.value)} style={{ margin: 2 }} />
            <input type="submit" value="Login" className='row' style={{ margin: 3 }} />
            <label className='row' id='error' style={{ color: 'red' }}>{error}</label>
         </form >
      </div >
   );
}

export default LoginForm;
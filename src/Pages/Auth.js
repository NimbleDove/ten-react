import React, { useState } from 'react';
import '../App.css';
import { Login } from './auth/Login';
import { Register } from './auth/Register';


function Auth() {

  const[currentForm, setCurrentForm]=useState('login');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }

  return (
    <div className="App">
     {
      currentForm === "login" ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />
     }

    </div>
  );
}

export default Auth;

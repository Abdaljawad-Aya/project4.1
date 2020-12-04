import React, { useState } from 'react';
// import {useEffect } from 'react';
import { useForm} from "react-hook-form";
// import isEmail from "validator/lib/isEmail";

//css
import styles from './RegisterLogin.module.css'


// Icons form React-icons
import { AiOutlineUser } from 'react-icons/ai';
// import { HiOutlineMail } from 'react-icons/hi';
import { RiLockPasswordLine } from 'react-icons/ri';
// import { FiPhone } from 'react-icons/fi';


const stylesNode = {
  container: {
    width: "100%",
    margin: "0 auto",
  },
  input: {
    width: "30vw",
    height: "2rem",
    padding:"1rem"
  },
};

const LogIn = () => {
    const { register, handleSubmit, errors, formState } = useForm({
    mode: "onBlur",
  });
  

  function onSubmitLogIn(data) {
    if (!(localStorage.getItem(data.username))) {
      alert('the phone is not used please register')
    }
    else {
      let tempUser = JSON.parse(localStorage.getItem(data.username));
      if (!(data.password === tempUser.password)) {
        
        alert('the password is not match')
      }
      else {
        alert('done')
        sessionStorage.setItem('user',JSON.stringify(tempUser) )
        
      }

    }
  }
    
    return (
      <div className={styles.formContainer} style={stylesNode.container}>
      <div className={styles.formContainerItems} >
      <div className={styles.sps}>
      <div>          
      <h4>Log In </h4>
      </div>
      <form  onSubmit={handleSubmit(onSubmitLogIn)}>
      <div>
            <AiOutlineUser/>
            <input
            name="username"
            ref={register({
              required: true,
              minLength: 3,
              maxLength: 20,
              pattern: /^[A-Za-z]+$/i,
              
            })}
            style={{ ...stylesNode.input, borderColor: errors.username && "red" }}
            placeholder="Username"
            />
      </div>
      
      <div>
            <RiLockPasswordLine/>
            <input
            name="password"
            ref={register({
              required: true,
              minLength: 6,
              pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/g
              
            })}
            style={{ ...stylesNode.input, borderColor: errors.password && "red" }}
            placeholder="Password"
            />
            </div>
            <div >
            <button className={styles.formBtn} type="submit" disabled={formState.isSubmitting}>
            Submit
            </button>
            </div>
            </form>
            </div>
            </div>
      </div>
      );
    }
    
export default LogIn;
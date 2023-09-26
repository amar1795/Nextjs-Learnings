"use client"
import { getProviders,signIn,useSession } from 'next-auth/react'
import React from 'react'
import styles from "./page.module.css"

const Login = () => {
  const session=useSession();

  const handleSubmit =(e)=>{
    e.preventDefault();
    const email=e.target[0].value;
    const password=e.target[1].value;
    signIn("credentials",{email,password,})
  }
  return (
    <div className={styles.container}>

    <form className={styles.form} onSubmit={handleSubmit}>
       
        <input type='text' placeholder='email' required className={styles.input}  />
        <input type='password' placeholder='password'  required className={styles.input}  />
      <button className={styles.button}>Login with Credentials</button>
      </form>
      <button className={styles.google} onClick={()=>signIn("google")}>Login with Google</button>


      
    </div>
  )
}

export default Login

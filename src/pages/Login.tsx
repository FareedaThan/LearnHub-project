import * as React from 'react'
import { FormEvent, useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthProvider'
import classes from './Login.module.css'
import MuiAlert from '../components/MuiAlert'

const Login = () => {
  const { isLoggedIn, isAlert, login } = useAuth()

  const [usernameInput, setUsernameInput] = useState('')
  const [passwordInput, setPasswordInput] = useState('')

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    try {
      // TODO: Try login
      await login(usernameInput, passwordInput)
    } catch (err: any) {
      // TODO: Handling error
      throw new Error(err.message)
    }
  }

  if (isLoggedIn) return <Navigate to="/" />
  return (
    <div>
      {isAlert ? <MuiAlert /> : <></>}
      <div className={classes.container}>
        <h1 className={classes.title}>Login</h1>

        <form className={classes.form} onSubmit={handleSubmit}>
          <div className={classes.formGroup}>
            <label htmlFor="username">Username</label>
            <input type="text" id="username" onChange={(e) => setUsernameInput(e.target.value)} required />
          </div>
          <div className={classes.formGroup}>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" onChange={(e) => setPasswordInput(e.target.value)} required />
          </div>
          <div className={classes.formGroup}>
            <button type="submit">Login</button>
          </div>
        </form>

        <h2 className={classes.subtitle}>
          <Link to="/register">{`Don't have an account? Register`}</Link>
        </h2>
      </div>
    </div>
  )
}

export default Login

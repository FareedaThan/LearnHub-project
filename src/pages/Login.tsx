import * as React from 'react'
import { FormEvent, useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthProvider'
import classes from './Login.module.css'

const Login = () => {
  const navigate = useNavigate()
  const { isLoggedIn, login } = useAuth()
  const [isSubmitting, setSubmitting] = useState(false)

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (isSubmitting) return
    setSubmitting(true)

    try {
      // TODO: Try login
    } catch (err) {
      // TODO: Handling error
    } finally {
      setSubmitting(false)
    }
  }

  if (isLoggedIn) return <Navigate to="/" />
  return (
    <div className={classes.container}>
      <h1 className={classes.title}>Login</h1>

      <form className={classes.form} onSubmit={handleSubmit}>
        <div className={classes.formGroup}>
          <label htmlFor="username">Username</label>
          <input type="text" id="username" />
        </div>
        <div className={classes.formGroup}>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" />
        </div>
        <div className={classes.formGroup}>
          <button type="submit" disabled={isSubmitting}>
            Login
          </button>
        </div>
      </form>

      <h2 className={classes.subtitle}>
        <Link to="/register">{`Don't have an account? Register`}</Link>
      </h2>
    </div>
  )
}

export default Login

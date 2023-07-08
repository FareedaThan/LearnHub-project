import * as React from 'react'
import { FormEvent, useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
import classes from './Register.module.css'
import { host } from '../constant'
import { toast } from 'react-hot-toast'

const Register = () => {
  const [isSubmitting, setSubmitting] = useState(false)
  const [inputUsername, setInputUsername] = useState('')
  const [inputName, setInputName] = useState('')
  const [inputPassword, setInputPassword] = useState('')
  const [inputConfirmPassword, setInputConfirmPassword] = useState('xxx')

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (isSubmitting) return
    setSubmitting(true)

    try {
      // TODO: Try login
      if (inputPassword === inputConfirmPassword) {
        const res = await fetch(`${host}/user`, {
          method: 'POST',
          body: JSON.stringify({
            username: inputUsername,
            name: inputName,
            password: inputPassword,
          }),
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        })
        const data = await res.json()
        toast.success('Register success!')
        return data
      } else {
        toast.error('Please check your password')
      }
    } catch (err: any) {
      throw new Error(err.message)
    } finally {
      setSubmitting(false)
    }
  }

  if (isSubmitting) return <Navigate to="/login" />
  return (
    <div>
      <div className={classes.container}>
        <h1 className={classes.title}>Register</h1>

        <form className={classes.form} onSubmit={handleSubmit}>
          <div className={classes.formGroup}>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              value={inputUsername}
              onChange={(e) => setInputUsername(e.target.value)}
              required
            />
          </div>
          <div className={classes.formGroup}>
            <label htmlFor="name">Your name</label>
            <input type="text" id="name" value={inputName} onChange={(e) => setInputName(e.target.value)} required />
          </div>
          <div className={classes.formGroup}>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" onChange={(e) => setInputPassword(e.target.value)} required />
          </div>
          <div className={classes.formGroup}>
            <label htmlFor="password">Confirm Password</label>
            <input type="password" id="password" onChange={(e) => setInputConfirmPassword(e.target.value)} required />
          </div>
          <div className={classes.formGroup}>
            <button type="submit" disabled={isSubmitting}>
              Register
            </button>
          </div>
        </form>

        <h2 className={classes.subtitle}>
          <Link to="/login">{`Already have an account? Login`}</Link>
        </h2>
      </div>
    </div>
  )
}

export default Register

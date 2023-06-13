import * as React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useAuth } from '../contexts/AuthProvider'
import { ChildProps } from '../types/auth.context'
import classes from './Layout.module.css'
import Logo from './Logo'

/* Typescript section, JS guys can ignore for now */
export type AuthProviderProps = ChildProps
/* End Typescript section */

const Layout = ({ children }: AuthProviderProps) => {
  const { isLoggedIn, logout } = useAuth()

  return (
    <>
      <header className={classes.header}>
        <Link to="/">
          <Logo />
        </Link>
        {!isLoggedIn ? (
          <nav className={classes.nav}>
            <NavLink to="/login" className={({ isActive }) => (isActive ? classes.activeLink : undefined)}>
              Login
            </NavLink>
            <NavLink to="/register" className={({ isActive }) => (isActive ? classes.activeLink : undefined)}>
              Register
            </NavLink>
          </nav>
        ) : (
          <nav className={classes.nav}>
            <a className={classes.link} onClick={logout}>
              Logout
            </a>
          </nav>
        )}
      </header>
      <main>{children}</main>
    </>
  )
}

export default Layout
